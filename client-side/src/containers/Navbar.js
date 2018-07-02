import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import "../style/navbar.css"

class Navbar extends Component {
  
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  
	render(){
    
		return(
			 <div>
          <nav class="navbar navbar-expand-lg navbar-light xo">
      <div class="container">
   
  <a class="xcv" href="/" >Qsien</a>
   <form class="form-inline my-2 my-lg-0 lcorner">
      <input class="form-control " type="search" placeholder="Search" aria-label="Search" />
      </form>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <li class="nav-item lcon2">
        <a class="nav-link" href="/">Home</a>
       </li>
      </li>
      <li class="nav-item lcon2">
        <a class="nav-link" href="/">Link</a>
      </li>
      <li class="nav-item dropdown lcon2">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Notifications
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          
        </div>
      </li>
      <li class="nav-item lcon2">
        <Link to="/blog/create">Add Question</Link>
      </li>
       </ul>
      {this.props.currentUser.isAuthenticated ? (
               
            <ul className="nav navbar-nav " >
              <li><Link to="/profile"><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHYqyZIBTGvqb-g6Y5JHrBJVoSEYJmGCok_EaQbIfep4ytN0-"
          alt=""
          width="50"
          height="50"
          className="img-thumbnail"
        /></Link>
              </li>
              <li class="nav-item lcon2 ">
                <a onClick={this.logout}>Log out</a>
              </li>
            </ul>
          ) : (
            <ul className="nav navbar-nav ">
              <li class="nav-item lcon2">
                <Link to="/signup">Sign up </Link>
              </li>
              <li className="nav-item lcon2">/</li>
              <li class="nav-item lcon2">
                <Link to="/signin">Log in</Link>
              </li>
            </ul>
          )}
     </div>
 
</div>
</nav>
 <div class="container sticky-top" id="hi">
 <div class= "horizontal-scroll-wrapper  rectangles">
  <div><a href="#home" class="ink">Education</a> </div>
  <div> <a href="#news" class="ink">Technology</a> </div>
  <div> <a href="#contact" class="ink">Sports</a></div>
  <div><a href="#about" class="ink">Health</a></div>
  <div> <a href="#about" class="ink">Dance</a></div>
  <div> <a href="#about" class="ink">Music</a></div>
  <div> <a href="#about" class="ink">Bollywood</a></div>
  <div><a href="#about" class="ink">Hollywood</a></div>
  <div><a href="#about" class="ink">Electronics</a></div>
  <div><a href="#about" class="ink">Clothing</a></div>
  <div><a href="#about" class="ink">Fashion</a></div>
  <div><a href="#about" class="ink">Travel</a></div>
  <div><a href="#about" class="ink">Politics</a></div>
  <div><a href="#about" class="ink">Royalty</a></div>
</div>
</div>

</div>

		);
	}
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Navbar);