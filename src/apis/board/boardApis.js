import { instance } from "../utils/instance";

export const getBoardRequest = async (accessToken) => {
  try {
    const response = await instance.get("/board/list", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const addBoardRequest = async (accessToken, data) => {
  try {
    const response = await instance.post(
      "/board/add",
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

