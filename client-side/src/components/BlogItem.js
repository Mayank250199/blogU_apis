import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";


const BlogItem = ({
  date,
  title,
  category,
  body,
  username,
  image,
  removeMessage,
  isCorrectUser
}) => (
  <div>
    <li className="list-group-item">
      <img
        src=""
        alt={username}
        height="100"
        width="100"
        className="timeline-image"
      />
      <div className="blog-area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>{title}</p>
        <p>{category}</p>
        <p>{body}</p>
        {isCorrectUser && (
          <a className="btn btn-danger" onClick={removeMessage}>
            Delete
          </a>
        )}
      </div>
    </li>
  </div>
);

export default BlogItem;