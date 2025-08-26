import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function Oauth2Signin() {
  const [searchParam] = useSearchParams();

  useEffect(() => {
    localStorage.setItem("accessToken", searchParam.get("accessToken"))
    window.location.href = "/";
  },[searchParam]);
  return <div></div>;
}

export default Oauth2Signin;
