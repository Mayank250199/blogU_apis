import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserProfile } from "../store/actions/users";
import ProfileMain from "./ProfileMain.js";

class profile extends Component {
    componentDidMount() {
      
        
        this.props.fetchUserProfile();
                
          }
   
render(){
    const {users} = this.props;
    console.log(users);

   return (
    <div>
      <ProfileMain
       name = {users.name}
        username={users.username}
        email={users.email}
      />
     
        
     
    </div>
  );
};
}

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser.user.id,
      users: state.users
    };
  }

export default connect(mapStateToProps,{fetchUserProfile})(profile);