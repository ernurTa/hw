import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        backgroundColor: "blue",
        marginTop: "10px",
        width: "100%",
        height: "60px",
      }}
    >
      <h1
        style={{
          marginLeft: "80px",
        }}
      >
        here is logo
      </h1>

      <nav
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            width: "50%",
          }}
        >
          <h1>Posts</h1>
          <h1>Main</h1>
          <h1>Userss</h1>
        </nav>
      </nav>
    </div>
  );
};

export default Header;
