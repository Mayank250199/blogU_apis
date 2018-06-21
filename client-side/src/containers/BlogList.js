import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs, removeBlog } from "../store/actions/blogs";
import BlogItem from "../components/BlogItem";

class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
  }
  render() {
    const { blogs, removeBlog, currentUser } = this.props;
    let blogList = blogs.map(b => (
      <BlogItem
        key={b._id}
        date={b.createAt}
        title={b.title}
        category={b.category}
        body={b.body}
        image={b.image}
        username={b.user.username}
        
        removeBlog={removeBlog.bind(this, b.user._id, b._id)}
        isCorrectUser={currentUser === b.user._id}
      />
    ));
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" >
            {blogList}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    blogs: state.blogs,
    currentUser: state.currentUser.user.id
  };
}

export default connect(mapStateToProps, { fetchBlogs, removeBlog })(
  BlogList
);
