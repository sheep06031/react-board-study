import { css } from "@emotion/react";

export const container = css`
  width: 80%;
  height: auto;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h1 {
    margin: 0;
  }

  & > textarea {
    width: 100%;
    border: 1px solid black;
    resize: none;
    margin-bottom: 15px;
  }

  & > textarea[name="content"] {
    height: 500px;
  }

  & > button {
    font-size: 16px;
    border: none;
    padding: 8px 15px;
    border-radius: 8px;
    color: black;
    transition: all 0.2 ease;

    :hover {
      background-color: #5c5c5c;
      color: #e8e6e6;
    }
  }
`;
