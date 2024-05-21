import React from "react";
import "./Homepage.css";
import Sidenav from "./navigation/Sidenav.tsx";
import Timeline from "./timeline/Timeline.tsx";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
