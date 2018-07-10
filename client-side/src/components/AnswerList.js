import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import renderHTML from 'react-render-html';
import '../style/Home.css';


const AnswerList = ({
  date,
  body,
  upvote,
  _id,
   downvote,
 removeMessage,
  isCorrectUser
  
}) => (
  
  <div>
    <li className="list-group-item">
     
      
      <div className="blog-area">
  
       
        
        <span className="text-muted">
          <Moment className="text-muted" format="Do MMM YYYY">
            {date}
          </Moment>
        </span>
        <p>by-{}</p>
        
        
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


export default AnswerList;