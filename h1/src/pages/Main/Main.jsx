import React from "react";
import img2 from "../images/images.jpg";

const Main = () => {
  return (
    <div
      className="img-photo"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        marginTop: "90px",
        transition: "5s all linear",
      }}
    >
      <a href="/rest">
        <img className="image" src={img2} alt="" />
      </a>
      <a href="../rest">
        <img className="image" src={img2} alt="" />
      </a>
      <a href="../rest">
        <img className="image" src={img2} alt="" />
      </a>
    </div>
  );
};

export default Main;
