/** @jsxImportSource @emotion/react */
import { FaUserPlus } from "react-icons/fa";
import * as s from "./styles";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { CgProfile } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";

function Header() {
  const queryClient = useQueryClient();
  const principalData = queryClient.getQueryData(["getPrincipal"]);
  const navigate = useNavigate();
  const onClickNavHandler = (path) => {
    navigate(path);
  };
  const onClickLogout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/auth/signin";
  };
  return (
    <div css={s.header}>
      <div onClick={() => onClickNavHandler("/")}>BOARD</div>
      <div>
        <ul>
          <li css={s.menuLi}>
            <Link to={"/board"}>게시판</Link>
          </li>
          <li css={s.menuLi}>
            <Link to={"/write"}>글쓰기</Link>
          </li>
        </ul>
      </div>
      <div>
        {principalData ? (
          <>
            <ul>
              <li css={s.headerIcon}>
                <IoMdPerson />
              </li>
              <li css={s.headerIcon} onClick={() => onClickLogout()}>
                <LuLogOut />
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul>
              <li
                onClick={() => onClickNavHandler("/auth/signin")}
                css={s.headerIcon}
              >
                <LuLogIn />
              </li>
              <li
                onClick={() => onClickNavHandler("/auth/signup")}
                css={s.headerIcon}
              >
                <FaUserPlus />
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
