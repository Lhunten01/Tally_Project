import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './GetDemo.css';
import img1 from './images/conputer.png'
import DemoForm from "./DemoForm";
function GetDemo()
{
   return(
<div className="container">
    <div className="row">
        <div className="col-lg-11 ">
        <h2>Get Demo</h2>
		<p>See how our tool maximizes your revenue potential! Book a demo now to explore how our customizable subscription services, combined with efficient expense tracking, can elevate your accounting business. Schedule your demo for a tailored walkthrough.</p>
        </div>
        <div className="col-lg-6 right-part">
            <img src={img1} alt="" />
        </div>
        <div className="col-lg-6">
            <DemoForm/>
        </div>
    </div>
</div>
   )
}
export default GetDemo;