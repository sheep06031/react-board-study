/** @jsxImportSource @emotion/react */
import { useNavigate, useSearchParams } from "react-router-dom";
import * as s from "./styles";
import { use } from "react";

function Oauth2() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();

  return (
    <div css={s.container}>
      <div
        css={s.card}
        onClick={() =>
          navigate(
            `/auth/oauth2/signup?provider=${searchParam.get(
              "provider"
            )}&providerUserId=${searchParam.get(
              "providerUserId"
            )}&email=${searchParam.get("email")}`
          )
        }
      >
        <h3>새로 가입하기</h3>
        <p>
          아직 계정이 없다면, 지금 사용하는 소셜 계정으로 새 계정을 만들 수
          있습니다.
        </p>
      </div>
      <div css={s.card}>
        <h3>연동하기</h3>
        <p>
          기존 계정이 있다면, 해당 계정과 지금의 소셜 계정을 연동할 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default Oauth2;
