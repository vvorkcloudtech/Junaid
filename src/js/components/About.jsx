import React from "react";

const About = ()=>{
    return(
        <div className="bg-light">
            <div > 
              <div className="container">
        <div className="row text-center pt-5">
          <div className="col-sm">
           <h1 id="hcol" className="display-4 font-weight-bold">35%</h1>
           <h2 id="csize" className="text-muted">Maximum Yearly <br/> Returns</h2>
          </div>
          <div className="col-sm">
            <h1 id="hcol" className="display-4 font-weight-bold">100%</h1>
           <h2 id="csize"  className="text-muted">Capital Protection</h2>
          </div>
          <div className="col-sm">
            <h1 id="hcol" className="display-4 font-weight-bold">5k</h1>
           <h2 id="csize"  className="text-muted"> Minimum  <br/> Investment Capital</h2>
          </div>
          <div className="col-sm">
            <h1 id="hcol" className="display-4 font-weight-bold">8k</h1>
           <h2 id="csize"  className="text-muted">Maximum  <br/> Coverage By FSCS</h2>
          </div>
        </div>
      </div>
              </div>
              <div className="mt-4 bg-light my-5">
           <div className="container">
        <div className="row">
          <div className="col-sm ">
            <h1>About Our Company</h1>
            <br/>
            <p>Independent Investors is a leading investment company <br/> based in the United Kingdom. Founded in the year 2008,<br/>  we have been in the investment industry for more than a <br/> decade, serving our clients through the years. Our team of<br/>  40 trusted associates boasts of a cumulative 250 years of <br/> experience in investment trading, investment sales and<br/>  portfolio management for clients from diverse backgrounds.</p>
            <br/><br/>
            <p>As a finance team, we tend to our client’s financial goals, guiding them to make the best investments. We further help them align these investments according to changing market values and adjust their portfolios from time to time. Our services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
          </div>
          <div className="col-sm container mt-3">
           <img src="https://independentinvestors.co.uk/wp-content/uploads/2019/06/independent-investements.jpg" className="img-fluid" alt=""/>
          </div>
          
        </div>
      </div>
        </div>
        </div>
    )
}
export default About;