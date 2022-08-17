import React, { useState, useEffect } from "react";

import "./Content.css";

const Content = (props) => {
  const [postId, setPostId] = useState();
  const [authorId, setAuthorId] = useState("");
  const [body, setBody] = useState(
    "To get more post-details click on the list items"
  );
  const [postTitle, setpostTitle] = useState("");
  const [userValues, setUserValues] = useState("");

  useEffect(() => {
    getUserValues();
  }, [postId]);

  const getUserValues = () => {
    // fetch user-data
    fetch(`https://jsonplaceholder.typicode.com/users/${authorId}`)
      .then((response) => response.json())
      .then((dataUser) => setUserValues(dataUser));
  };

  return (
    <div className="content">
      <div className="karte">
        <div className="ngcard">
          <div className="container">
            <div className="post-title">
              <b>{postTitle}</b>
            </div>
            {body}
            <hr />
            <h5>
              <b>{userValues.name}</b>
            </h5>
            <p>
              <a href="#">{userValues.website}</a>
            </p>
          </div>
        </div>
      </div>
      <div className="provider">
        {props.posts.map((post) => {
          return (
            <div
              className="list"
              key={post.id}
              onClick={() => {
                setAuthorId(post.userId);
                setPostId(post.id);
                setpostTitle(post.title);
                setBody(post.body);
              }}
            >
              <div className="post-title">
                {post.id}
                {". "}
                {post.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
