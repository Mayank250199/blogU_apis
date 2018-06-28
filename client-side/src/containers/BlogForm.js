import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewBlog } from "../store/actions/blogs";

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      body: "",
      upload_file:"",
      user_id:""
    };
  }

  handleNewBlog = event => {
    event.preventDefault();
    this.state.upload_file = (this.state.upload_file).replace("C:\\fakepath\\", "/uploads/Blog/");
    this.props.postNewBlog(this.state);
    this.setState=( {title: ""}, {category: ""},{body: ""},{upload_file:""},{ user_id:""});
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleNewBlog}>
        {this.props.errors.blog && (
          <div className="alert alert-danger">{this.props.errors.blog}</div>
        )}
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={this.state.title}
          onChange={e => this.setState({ title: e.target.value })}
        />
        <label>Category</label>
        <input
          type="text"
          className="form-control"
          value={this.state.category}
          onChange={e => this.setState({ category: e.target.value })}
        />
        <label>Description</label>
        <input
          type="text"
          className="form-control"
          value={this.state.body}
          onChange={e => this.setState({ body: e.target.value })}
        />
        <label>Picture</label>
        <br/>
        <input
          type="file"
          value={this.state.upload_file}
          
          onChange={e => this.setState({ upload_file: e.target.value })}
        />
        <br/>
        <button type="submit" className="btn btn-success form-control">
          Submit
        </button>
      </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors
  };
}

export default connect(mapStateToProps, { postNewBlog })(BlogForm);