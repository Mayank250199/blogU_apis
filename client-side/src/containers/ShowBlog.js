import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchBlogById} from "../store/actions/blogs";



class ShowBlog extends Component {
  componentDidMount() {
     const id = this.props.match.params.id
     this.props.fetchBlogById(id);
      }


  render() {

    const {  currentUser} = this.props;
    return (
      <div className="row col-sm-8">
        <div className="offset-1 col-sm-10">
          <ul className="list-group" >

          <h1>hii</h1>
          
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

    currentUser: state.currentUser.userid
  };
}

export default connect(mapStateToProps, {fetchBlogById})(
  ShowBlog
);
