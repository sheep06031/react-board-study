/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { addBoardRequest } from "../../apis/board/boardApis";
import * as s from "./styles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Write() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);

  const addBoardMutation = useMutation({
    mutationKey: "addBoard",
    mutationFn: addBoardRequest,
    onSuccess: (response) => {
      console.log("work");
      if (response.data.status === "success") {
        alert("게시물 작성 완료!");
        navigate("/board");
        return;
      } else if (response.data.status === "failed") {
        alert(response.data.message);
        return;
      }
    },
    onError: (error) => {
      alert("문제가 발생했습니다")
      console.log(error);
      return
      
    },
  });

  const addOnClickHandler = () => {
    if (title.trim().length === 0 || content.trim().length === 0) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    if (principalData === undefined) {
      alert("로그인이 필요합니다");
      navigate("/auth/signin");
      return;
    }
    addBoardMutation.mutate({
      title: title,
      content: content,
      userId: principalData.data.data.userId,
    });
  };
  return (
    <div css={s.container}>
      <h1>제목</h1>
      <input
        type="text"
        placeholder="제목을 입력해주세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <h1>본문</h1>
      <textarea
        name="content"
        id=""
        placeholder="내용을 입력해주세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div css={s.btnContainer}>
        <button onClick={() => addOnClickHandler()}>글 쓰기</button>
      </div>
    </div>
  );
}

export default Write;
