import React from "react";
function Nav() {
  return(
    <div className="navbar">
         <div className="navbar-brand"><a href="#">Logo</a></div>
      <ul className="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#section1">gallery</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#">contact us</a></li>
          <li className="btn" >jjjjjjjjjjjjjjjj</li>

      </ul>
      <div class="search">
          <input type="search" placeholder="search"></input>
      </div>

      <div className="btn btn-primary">junaid</div>
    </div>
  )
}
export default Nav;
