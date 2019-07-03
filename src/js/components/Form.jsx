import React from "react";
const Form =()=>{
    return(
        <div className="bg-light">
          <div className="section bg-light mt-5">
          <div className="container">
              <h1 className="text-primary text-center ">Happy Clients</h1>
              <p className="text-center pt-3">See what our happy clients got to say about us</p>
              <div className="row pt-5 ">
                  <div className="col mr-5 bg-white">
                  <div className="d-flex pt-5 justify-content-center">
                      <img className="border border-dark" src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/testi-1.jpg" alt=""/>
                 </div>
                      <p className="text-center pt-5">" Independent investors have been managing my portfolios for more than 5 years now. Apart from helping me make sound financial decisions, the further ensure that every penny you invest is accounted for. I am truly happy with their work. “</p>
                      <h5 className="text-center mt-5 pb-5">TERRY PARKER</h5>
                  </div>

                  <div className="col mr-5 bg-white">
                  <div className="d-flex pt-5 justify-content-center">
                      <img className="border border-dark" src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/testi-2.jpg" alt=""/>
                 </div>
                      <p className="text-center pt-5">" I have invested with various other investment firms in the UK, but none has exceeded my expectations like Independent Investors. Their personalized services ensured stable and consistent returns. The team is professional yet very approachable and has helped me gain the best returns from the investments. I would definitely recommend them to my acquaintances. “</p>
                      <h5 className="text-center mt-5 pb-5">MATHEW JENSON</h5>
                  </div>

                  <div className="col bg-white">
                  <div className="d-flex pt-5 justify-content-center">
                      <img className="border border-dark" src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/testi-3.jpg" alt=""/>
                 </div>
                      <p className="text-center pt-5">“The personalized services from Independent investors has always helped me with my financial goals. The team is highly proactive and available to answer queries at all times. I would highly recommend their services."</p>
                      <h5 className="text-center mt-5 pb-5">MARIAM SALAM</h5>
                  </div>
              </div>
          </div>
      </div>





            <br/>
            <hr/>
            <br/>
            <div className="container">
        <div className="row">
          <div className="col-sm">
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
          <div className="col-sm mt-4 ml-5">
            <h5>REACH OUT TO US FOR CUSTOM FINANCIAL COUNSEL AND  GUIDANCE.</h5>
            <br/>
            <p>We are a team of investment specialists focused on bringing you tailored investment plans to help you realise your financial goals.</p>
            <h5>HAVE ANY QUESTIONS? REACH US BY PHONE.</h5>
            <br/>
            <h5>Call us on +44 203 695 1157</h5>
            <br/>
            <h5>GET MORE INFO QUICKLY.</h5>
          </div>
          
        </div>
      </div>
      <div className="mt-5">
          <img className="img-fluid" src="../img/map.png" alt=""/>
      </div>
            
        </div>
    )

}
export default Form;