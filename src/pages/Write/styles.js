import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: auto;
  padding: 40px 200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;


  & > h1 {
    margin: 0;
  }
  & > input {
    width: 100%;
    border: 1px solid #dbdbdb;
    background-color: transparent;
    padding: 15px 20px;
    resize: none;
    margin-bottom: 15px;
    outline: none;
    border-radius: 15px;
    color: #333;
    box-sizing: border-box;
  }

  & > textarea {
    min-height: 500px;
    width: 100%;
    border: 1px solid #dbdbdb;
    background-color: transparent;
    padding: 15px 20px;
    resize: none;
    margin-bottom: 15px;
    outline: none;
    border-radius: 15px;
    color: #333;
    box-sizing: border-box;
    font-size: 14px;
  }
`;

export const btnContainer = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  & > button {
    padding: 12px 15px;
		border: none;
		border-radius: 8px;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		color: white;
		transition: all 0.2s ease;
    background-color: #0d6efd;

    :hover {
      opacity: 0.9;
    }
  }
`;
