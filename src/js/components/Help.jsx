import React from "react";
const Help=()=>{
    return(
        <div className="container-fluid">
            <h5 className="text-center">We help our clients achieve their financial goals with 100% capital protection.</h5>
            <div className=" my-5">
           <div className="container">
        <div className="row">
          <div className="col-sm ">
            <h1>About Our Company</h1>
            <br/>
            <p>As a leading investment firm with access to some of the high performing investment funds in the UK, we handle investments from as low £5,000 to £1,000,000+ and deliver consistent returns to all our clients.</p>
            <br/>
            <p>We bring the best possible financial gains to each and every one of our client and ensure 100% capital protection all the while. Our ongoing conversations with them help in maintaining better client relationships and understand their financial goals better. With this information, we further help perfect the portfolios through continuous assessments. We also provide a clear stress-free exit strategy to our clients, making business with us completely hassle-free.</p>
            <br/>
            <p>For more information, feel free to contact us by email or phone. We are happy to help always.</p>
          </div>
          <div className="col-sm container mt-3">
           <img src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/happy-family.jpg" className="img-fluid" alt=""/>
          </div>
          
        </div>
      </div>
        </div>
        <hr/>
        <div className="mt-5 container">
        <div className="container mt-5">
        <div className="row">
          
          <div className="col-8">
            <h2>Compound Interest Calculator</h2>
            <p>To effectively grow your wealth, you must systematically fund your investments over a period of time. This can be added as smaller deposits to a savings account, from where you can divert to other plans at a later time.</p>
            <br/>
            <p>TOur compound interest calculator will help you understand how this strategy could work in your favour.</p>
          </div>
          <div className="col-sm bdf">
            <div className="row p-2">
                <div className="col-sm-6">
                    <p>Principal:</p>
                    <input type="text" className="w-100"/>
                </div>
                <div className="col-sm-6 ">
                    <p>Interest Rate:</p>
                    <input type="text" className="w-100"/>
                </div>
            </div>
            <div className="row ">
                <div className="col-sm-6">
                    <p>Compounded:</p>
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
        <button className="btn btn-outline-dark">SUBMIT</button>
        
                </div>
                <div className="col-sm-6 ">
                    <p>Period (months):</p>
                    <input type="text" className="w-100"/>
                </div>
                <div className="sty container mt-3 w-100">
            <p className="mt-2">INTREST AMOUNT:</p>
            <h4><i className="fa fa-euro"></i>0.0</h4>
        </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        </div>
    )
} 
export default Help; 