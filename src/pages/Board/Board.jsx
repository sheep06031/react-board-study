/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { getBoardRequest } from "../../apis/board/boardApis";
import * as s from "./styles";

function Board() {
  const [boardList, setBoardList] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    getBoardRequest(accessToken).then((response) => {
      console.log("API 응답:", response.data); 
      setBoardList(response.data.data); 
    });
  }, []);

  return (
    <div>
      <h2>Board List</h2>
      <ul>
        {boardList.map((board) => (
          <li key={board.boardId}>
            제목: {board.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Board;
