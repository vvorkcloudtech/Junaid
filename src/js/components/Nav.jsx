import React from "react";

const Nav =()=>{

    return(
        <div className="mnav">
            <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand ml-5 mt-3" href="#">  <img src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/independent-investors-logo.png" alt=""/> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse  mar" id="navbarNav">
          <ul className="navbar-nav ul ">
            <li className="nav-item active">
              <a className="nav-link" href="#">ABOUT US <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TESTIMONIALS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">WHAT WE OFFER</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">CONTACT US</a>
            </li>
            <li>
                <button className="btn ml-5 btn-dark">
                 <i className="fa fa-phone rot"></i> +44 203 695 1157</button>
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )


}
export default Nav;