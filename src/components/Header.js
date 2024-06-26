import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();
  function ToLogin() {
    navigate("/login");
    return;
  }

  function ToHome() {
    navigate("/");
    return;
  }
  function ToBoards() {
    navigate("/boards/clubs");
    return;
  }
  function ToSesseion() {
    navigate("/boards/5");
    return;
  }
  function Mypage() {
    navigate("/profile/edit/:user_id");
  return;
}
function ToPerformance() {
  navigate("/boards/performances");
  return;
}

  return (
    <div className="Headerwidth">
      <div className="Container">
        <div className="Category_left">
          <button onClick={ToSesseion}>세션</button>
          <button onClick={ToBoards}>모집</button>
          <button onClick={ToPerformance}>연합공연</button>
          <button>음악분석</button>
        </div>
        <div className="Logo" onClick={ToHome}>대일밴드</div>
        <div className="Category_right">
          <input
            className="Search"
            placeholder=" 검색어를 입력하세요 ..."
          ></input>
          <button className="LoginBtn" onClick={ToLogin}>
            로그인
          </button>
          <button className="MypageBtn" onClick={Mypage}>마이페이지</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
