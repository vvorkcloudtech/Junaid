import React, { Component } from "react";
import Nav from "./Nav"
import Header from "./Header"
import About from "./About";
import Offer from "./Offer" 
import Help from "./Help";
import Form from "./Form";
import Footer from "./Footer";
class App extends Component {
  
 
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <About />
        <Offer />
        <Help />
        <Form />
        <Footer />
        




      </div>
    );
  }
}
export default App;