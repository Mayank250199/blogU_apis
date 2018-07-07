import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';
import '../style/Home.css';


const BlogItem = ({
  date,
  title,
  category,
  _id,
  body,
  removeMessage,
  isCorrectUser
  
}) => (
  
  <div>
    <li className="list-group-item">
     
      
      <div className="blog-area">
  
       
        <Link to={`/blog/${_id}`}><h1>{title}</h1></Link>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>by-{}</p>
        
        <p className="cate">{category}</p>
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