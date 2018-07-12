import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBlogById} from "../store/actions/blogshow";
import Blog from "../components/Blog";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {postNewComment} from "../store/actions/blogs";
import "../style/comment.css";
import AnswerList from "../components/AnswerList";






class ShowBlog extends Component {
  componentDidMount() {
     const id = this.props.match.params.id;
     this.props.fetchBlogById(id);
      }
      
   //answer
   
   constructor(props) {
    
    super(props);
    this.state = {
      body: '',
      id:''
    };
    // bind
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    
  }

  // lifecycle
  
    onHandleChange(e) {
    this.setState({ body: e });
    console.log(this.state.body);
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      body: this.state.body,
      id :  this.props.match.params.id
    };
    this.props.postNewComment(post);
    this.setState({
      body: '',
      id:''      

    });
  }

  render(){

    const { blogs, currentUser,blogshow} = this.props;
     function Blog (){
      <Blog
      _id={blogshow._id}
      title={blogshow.title}
      category={blogshow.category}
      body={blogshow.body}
      />
     }   
 
    let answerList = blogshow.map(a => (
      
      <AnswerList

        _id={a._id}
        date={a.created}
        body={a.body}
        upvote={a.upvote}
        downvote={a.downvote}



      />
       
    ));

    return (
      <div>
        <div>
        {/* blog display */}
        {Blog}
        
                
          </div>
        
        {/* add answer */}
          <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <label className="cinput">Add Reply...</label>
          <div className="form-group">
            <ReactQuill
              modules={ShowBlog.modules}
              formats={ShowBlog.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onHandleChange}
            />
          </div>
          
          <button className="btn btn-primary">Post</button>
        </form>
        <br />
        
      </div>
          {/* answer display */}
          {answerList}
         
    </div>
    );
  }
}


ShowBlog.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

ShowBlog.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
];



function mapStateToProps(state) {
  return {
    blogs:state.blogs,
    blogshow:state.blogshow,
    currentUser: state.currentUser.userid
  };
}

export default connect(mapStateToProps, {fetchBlogById,postNewComment})(
  ShowBlog
);
