import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBlogs, removeBlog } from "../store/actions/blogs";
import { fetchUserId } from "../store/actions/users";
import BlogItem from "../components/BlogItem";


class BlogList extends Component {
  componentDidMount() {
    this.props.fetchBlogs();
   
      }


  render() {

    const { blogs, removeBlog, currentUser, user} = this.props;
    
      let blogList = blogs.map(b => (
      
      <BlogItem

        _id={b._id}
        date={b.author.created}
        title={b.title}
        category={b.category}
        body={b.body}
        answer={b.answer[0].body}



        removeBlog={removeBlog.bind(this, b.author.user_id, b._id)}
        isCorrectUser={currentUser === b.author.user_id}
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
    currentUser: state.currentUser.userid
  };
}

export default connect(mapStateToProps, { fetchBlogs, removeBlog ,fetchUserId})(
  BlogList
);
