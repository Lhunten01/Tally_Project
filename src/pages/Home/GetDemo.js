import React from 'react';
import './GetDemo.css'; 
import img1 from '../../images/conputer.png'; 
import DemoForm from './DemoForm'; 

function GetDemo() {
    return (
        <div className="container get-demo">
            <div className="row">
                <div className="col-lg-11 get-demo get-demo-block">
                    <h2>Get Demo</h2>
                    <p>See how our tool maximizes your revenue potential! Book a demo now to explore how our customizable subscription services, combined with efficient expense tracking, can elevate your accounting business. Schedule your demo for a tailored walkthrough.</p>
                </div>
                <div className="col-lg-6 img-fluid right-part pb-4">
                    <img src={img1} alt="Demo Image" className="demo-image" />
                </div>
                <div className="col-lg-6 form-wrapper">
                    <DemoForm />
                </div>
            </div>
        </div>
    );
}

export default GetDemo;
