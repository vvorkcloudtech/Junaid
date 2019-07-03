import React from "react";
const Footer =()=>{
    return(
        <div className=" mt-1 pt-5 bg-primary " >
             <div className="container">
        <div className="row">
          <div className="col-sm-4">
           <h4 className="text-muted">CONTACT US</h4>
           <br/>
           <h5 className="text-white-50 ">1 St Giles High St <br/>
                London WC2H <br/>
                8AG UK</h5>
                
                <h5 className="text-white">Phone: +44 203 695 1157</h5>
          </div>
          <div className="col-sm">
           <h4 className="text-muted">ABOUT</h4>
           <p className="text-white-50 ">Founded in 2008, Independent Investors is one of the UK’s trusted investment firms. Their financial team consists of 40 trusted associates, with a cumulative 250 years experience trading investments and managing portfolios for their vibrant clientele. Their services include FSCS protected funds and savings options like term savings deposit accounts, fixed-term bonds, global bond index funds, ETFs and index-linked funds.</p>
          </div>
          
        </div>
      </div>
      <div className="mt-5 p-3 text-center bg-dark w-100 text-white ">&copy;2019 Independent Investors. All Rights Reserved.</div>
        </div>
    )
}
export default Footer;