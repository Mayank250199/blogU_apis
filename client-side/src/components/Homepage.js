import React from "react";
import { Link } from "react-router-dom";
import BlogTimeline from "./BlogTimeline";

const Homepage = ({ currentUser }) => {
   return (
    <div>
      <BlogTimeline/>
      
        username={currentUser.user.username}
      />
    </div>
  );
};

export default Homepage;
