import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import Oauth2 from "../../pages/Oauth2/Oauth2";
import Oauth2Signup from "../../pages/Oauth2Signup/Oauth2Signup";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/oauth2" element={<Oauth2 />} />
      <Route path="/oauth2/signup" element={<Oauth2Signup />} />
    </Routes>
  );
}

export default AuthRouter;
