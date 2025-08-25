/** @jsxImportSource @emotion/react */
import * as s from "./styles";


function Write() {
  return (
    <div css={s.container}>
      <h1>제목</h1>
      <textarea name="title" id=""></textarea>
      <h1>본문</h1>
      <textarea name="content" id=""></textarea>
      <button>글 쓰기</button>
    </div>
  )
}

export default Write