import React from "react";
import img2 from "../images/images.jpg";
import { Link } from "react-router-dom";
const Rest = () => {
  return (
    <nav>
      <Link to={"/"}>
        {" "}
        <img src={img2} alt="" style={{ width: "100%", height: "500px" }} />
      </Link>
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          border: "1px solid black",
          width: "500px  ",
          marginTop: "60px",
        }}
      >
        <h1>News</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          dolorum, eligendi fuga eum nisi dolores, eveniet ipsam molestias
          aliquid adipisci autem reprehenderit animi sapiente? A quae, aperiam
          accusamus sint natus quam ea cupiditate, est nihil culpa sapiente modi
          aut pariatur architecto itaque iusto officia magnam facilis veritatis
          corrupti voluptates laudantium. Architecto velit dicta sapiente, ullam
          voluptates aliquam eius similique officiis?
        </p>
      </div>
    </nav>
  );
};

export default Rest;
