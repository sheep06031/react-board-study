/** @jsxImportSource @emotion/react */
import { FaUserPlus } from "react-icons/fa";
import * as s from "./styles";
import { LuLogIn } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const onClickNavHandler = (path) => {
    navigate(path);
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
        <ul>
          <li onClick={() => onClickNavHandler("/auth/signin")} css={s.headerIcon}>
            <LuLogIn />
          </li>
          <li onClick={() => onClickNavHandler("/auth/signup")} css={s.headerIcon}>
            <FaUserPlus />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
