import { css } from "@emotion/react";

export const layout = css`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const mainContainer = css`
    width: 60%;
    height: calc(100vh - 60px);
    min-height: 800px;
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
`;
