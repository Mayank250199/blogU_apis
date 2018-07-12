import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserId } from "../store/actions/users";
import ProfileMain from "./ProfileMain.js";

class profile extends Component {
  componentDidMount(){
    
  const {currentUser} = this.props;
      this.props.fetchUserId(this.props.currentUser);
  }
render(){
  const {users} = this.props;
  return (
     
    <div>
      
        <ProfileMain
        username = {users.username}
        />
     
    </div>
  );
};
}

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser.user.id,
      users:state.users
      
    };
  }

export default connect(mapStateToProps,{fetchUserId})(profile);