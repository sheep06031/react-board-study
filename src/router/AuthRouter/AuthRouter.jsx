import { Route, Routes } from "react-router-dom";
import Signin from "../../pages/Signin/Signin";
import Signup from "../../pages/Signup/Signup";
import Oauth2 from "../../pages/Oauth2/Oauth2";
import Oauth2Signup from "../../pages/Oauth2Signup/Oauth2Signup";
import Oauth2Signin from "../../pages/Oauth2Signin/Oauth2Signin";
import Oauth2Merge from "../../pages/Oauth2Merge/Oauth2Merge";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/oauth2" element={<Oauth2 />} />
      <Route path="/oauth2/signup" element={<Oauth2Signup />} />
      <Route path="/oauth2/signin" element={<Oauth2Signin />} />
      <Route path="/oauth2/merge" element={<Oauth2Merge />} />
    </Routes>
  );
}

export default AuthRouter;
