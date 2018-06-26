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
      image:"",
    };
  }

  handleNewBlog = event => {
    event.preventDefault();
    this.props.postNewBlog(
      this.state.title ,
      this.state.category ,
      this.state.body ,
      this.state.image 
    );
    this.setState(
      { title: "" },
      { category: "" },
      { body: "" },
      {image:""});
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
          value={this.state.image}
          onChange={e => this.setState({ image: e.target.value })}
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