import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserId } from "../store/actions/users";
import ProfileMain from "./ProfileMain.js";

class profile extends Component {
  
render(){
  const {currentUser } = this.props;
    console.log(currentUser);
    
   var hii = this.props.fetchUserId(currentUser);
         
   

   return (
     
    <div>
     
        
     
    </div>
  );
};
}

function mapStateToProps(state) {
    return {
      currentUser: state.currentUser.user.id,
      
    };
  }

export default connect(mapStateToProps,{fetchUserId})(profile);