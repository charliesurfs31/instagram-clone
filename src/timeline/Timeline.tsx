import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions.tsx";
import Post from "./posts/Post.tsx";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "cgaineyh",
      postImage:
        "https://i.pinimg.com/originals/91/06/a2/9106a22fd5b4335f3f2737e6f1e338b6.jpg",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "redian_",
      postImage:
        "https://www.perfectwavetravel.com/wp-content/uploads/2019/12/Iceland-Grindavik1.jpg",
      likes: 56,
      timestamp: "12h",
    },
    {
      user: "johndoe",
      postImage: "https://www.hbautoandac.com/Files/Images/Seal-Beach.jpg",
      likes: 38,
      timestamp: "18h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right"></div>
      <Suggestions />
    </div>
  );
}

export default Timeline;
