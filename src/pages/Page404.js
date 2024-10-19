import React from "react";
import { useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate(); // 使用 useNavigate

  const handleRedirect = () => {
    navigate("/"); // 使用 navigate 來導向首頁
  };

  return (
    <div>
      <img
        src={require("../images/page404.png")}
        alt="page404"
        className="page404"
        height="750"
        width="1500"
      />
      <div className="btn">
        <button onClick={handleRedirect}>回首頁</button>
      </div>
    </div>
  );
};

export default Page404;
