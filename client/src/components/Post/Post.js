

import React from "react";
import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";

import "./post.css";

export default function Post({ post }) {

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${post.userName}`}>
                            <img
                                className="postProfileImg"
                                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                                alt="avatar"
                            />
                        </Link>
                        <span className="postUsername">{post.userName}</span>
                        <span className="postDate">2 days ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post.caption}</span>
                    <img className="postImg" src={post.image} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <span className="postLikeCounter"> 4 likes people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText"> comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
