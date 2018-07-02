import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';



const BlogItem = ({
  date,
  title,
  category,
  user,
  body,
  username,
  image,
  removeMessage,
  isCorrectUser
  
}) => (
  
  <div>
    <li className="list-group-item">
     
      
      <div className="blog-area">
        <Link to="/">@{username} &nbsp;</Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>{image}</p>
        <p>{title}</p>
        {console.log(user)}
        <p>{user.name}</p>
        <p>{category}</p>
        <p>{renderHTML(body)}</p>
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