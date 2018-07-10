import React from "react";
import Moment from "react-moment";
import renderHTML from 'react-render-html';
import '../style/Home.css';


const Blog = ({
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
  
       
        <h1>hii{title}</h1>
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>by-{}</p>
        
        <p className="cate">{category}</p>
        {isCorrectUser && (
          <a className="btn btn-danger" onClick={removeMessage}>
            Delete
          </a>
        )}
      </div>
    </li>
  </div>
  );


export default Blog;