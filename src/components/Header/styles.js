import { css } from "@emotion/react";

export const header = css`
  height: 60px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    & > ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
      
      & > li {
        cursor: pointer;
        color: #333;
        & > a {
            color: #333;
            text-decoration: none;
        }
        
      }
    }
  }
`;

export const menuLi = css`
  padding: 10px;
`;

export const headerIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  
`;


