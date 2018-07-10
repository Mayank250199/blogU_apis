import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {postNewComment} from "../store/actions/blogs";
import "../style/comment.css";



class CommentInput extends Component {
    componentDidMount() {
        const id = this.props.params.id;
             }
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
      id :this.state.id
    };
    this.props.postNewComment(post);
    this.setState({
      body: '',
      id:''      

    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <label className="cinput">Add Reply...</label>
          <div className="form-group">
            <ReactQuill
              modules={CommentInput.modules}
              formats={CommentInput.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onHandleChange}
            />
          </div>
          
          <button className="btn btn-primary">Post</button>
        </form>
        <br />
        
      </div>
    );
  }
}

CommentInput.modules = {
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

CommentInput.formats = [
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
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewComment })(CommentInput);