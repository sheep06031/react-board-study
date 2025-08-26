import { instance } from "../utils/instance";

export const signupRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signinRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signin", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getPrincipalRequest = async () => {
  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });
  try {
    const response = await instance.get("/auth/principal");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const oauth2SignupRequest = async (data) => {
  try {
    const response = await instance.post("/oauth2/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const oauth2MergeRequest = async (data) => {
  try {
    const response = await instance.post("/oauth2/merge", data);
    return response;
  } catch (error) {
    return error.response;
  }
};