import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {postNewBlog} from "../store/actions/blogs";



class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      category:''
      
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
      title: this.state.title,
      body: this.state.body,
      category:this.state.category
    };
    this.props.postNewBlog(post);
    this.setState({
      title: '',
      body: '',
      category:''
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => {
                this.setState({ title: e.target.value });
              }}
              ref="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              value={this.state.category}
              type="text"
              name="category"
              placeholder="category"
              onChange={e => {
                this.setState({ category: e.target.value });
              }}
              ref="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <ReactQuill
              modules={BlogForm.modules}
              formats={BlogForm.formats}
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

BlogForm.modules = {
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

BlogForm.formats = [
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

export default connect(mapStateToProps, { postNewBlog })(BlogForm);