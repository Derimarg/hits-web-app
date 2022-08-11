import React from "react";
import "./feed.css";

import Post from '../Post/Post'
import postsdb from "../../db/postdb";

export default function Feed({ username }) {

  return (
    <div className="feed">
      <div className="feedWrapper">
        {postsdb.posts.map((p, id) => (
          <Post key={id} post={p} />
        ))}
      </div>
    </div>
  );
}
