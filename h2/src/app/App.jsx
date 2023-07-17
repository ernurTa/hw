import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
// import Pages from "../Pages/Pages";

// import { Pages, PostDetails } from "../../components";

const getShortValue = (value, maxLength) => {
  if (value.length > maxLength) {
    return value.substring(0, maxLength) + "...";
  }
  return value;
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("scs");
        console.log(data);
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      <div style={{ height: "600px", overflowY: "scroll", background: "gray" }}>
        {posts.length > 0
          ? posts.map((post) => (
              <div>
                <div
                  key={post.id}
                  style={{
                    height: "130px",
                    border: "1px solid black",
                    paddingLeft: "40px",
                  }}
                >
                  <h2>{post.title}</h2>
                  <p>{getShortValue(post.body, 20)}</p>
                  <Link to={`/posts/${post.id}`}>more</Link>
                  <Link to={`/posts/${post.id}`}>
                    {" "}
                    <button>details</button>
                  </Link>
                </div>
                <Link to={`/posts/${post.id}`}></Link>
              </div>
            ))
          : "loading"}
      </div>
    </div>
  );
};

const PostDetails = ({}) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);
  return (
    <div>
      <h1>post</h1>
      <Link to={"/"}>
        <button>back</button>
      </Link>
      <div style={{ height: "600px", overflowY: "scroll" }}>
        <div key={post?.id}>
          <h2>{post?.id}</h2>
          <h2>{post?.title}</h2>

          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exapt path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
