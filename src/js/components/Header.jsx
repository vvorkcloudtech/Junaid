import React from "react";

const Header =()=>{
    return(
        <div className="section mt-4 " id="backimg">
          <div className="bagimg container " >
              <div className="container ">
        <div className="row">
          <div className="col-8">
           <h6 className="text-info">HIGH-PERFORMANCE INVESTMENTS FROM UK’S TOP INVESTMENT COMPANY</h6>
           
           <h1 className="display-4" >Enjoy Up To <span className="font-weight-bold"> 35%</span> <br/> Yearly Returns</h1>
           <br/>
           <ul className="">
               <li> <span className="font-weight-bold"> Custom Portfolios: </span>Flexible Investment Solutions </li>
               <li><span className="font-weight-bold"> Fully Managed: </span>Personalized Services Available 24x7</li>
               <li><span className="font-weight-bold"> Secure Returns: </span>Safe, Secure & Consistent Interest Returns</li>
               <li><span className="font-weight-bold"> Fully Regulated: </span>FCA Regulated & FSCS Covered Funds</li>

           </ul>
          </div>
          
          <div className="col-sm bg-white p-4  ">
            <div className="text-center mt-4">
            <h5 >Achieve Your Financial Goals By <br/> Investing With Us Today!</h5>
            <p id="psize">Fill in the form to reach out to us and we  will call you back in   <br/>24 hours.</p>
            </div>
            <form>
        <div className="form-row">
          <div className="col-sm ">
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col-sm">
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
        </div>
        
        <div className="form-row mt-3">
        <div className="col-sm">
            <input type="emile" className="form-control" placeholder="Emil Adderss" />
          </div>
        </div>
        


        <div className="form-row mt-3 w-100">
        <div className="form-group w-100">
        <select className="form-control" id="exampleFormControlSelect1">
          <option id="psize">Which investment option interested in ?</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
        </div>


        
        <div className="form-row w-100">
        <div className="form-group w-100">
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Investment sum</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
        </div>

        <button id="btcol" className="btn btn-primary btn-lg btn-block">CONTACT US</button>
      </form>
           
          </div>



          
        </div>
      </div>
 </div>
 <br/>

            
         
        </div>
    )

}
export default Header
