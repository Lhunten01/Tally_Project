import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
// import "./my.css";
import img1 from "../../images/discover-img.png";
const CPASec = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="cpa-sec">
      <div className="container">
        <div className="row expense-div align-items-center ps-lg-5 pt-lg-5">
          <div className="col-xl-6" data-aos="fade-right">
            <h3 className="title">
              Discover the Future of Accounting with CPA Expense Tracker!
            </h3>
            <p className="pb-1">
              Revolutionize your practice with our cutting-edge solution
              designed for accountants like you. Simplify expense management,
              streamline client interactions, and elevate your services with our
              intuitive platform.
            </p>
            <p className="pb-1">
              Effortlessly consolidate expenses, manage documents, and
              communicate seamlessly with clients. Our robust features, from
              in-built CRM capabilities to real-time chat, audits, and
              subscription management, empower you to offer tailored, top-tier
              services.
            </p>
            <p className="pb-1">
              Experience the pinnacle of data security and compliance through
              our advanced technology, ensuring your clients' information is
              safeguarded at the highest standards.
            </p>
            <p className="pb-1">
              Join the evolution of accounting today with CPA Expense Tracker -
              where innovation meets precision, and efficiency meets excellence.
            </p>
            {/* Uncomment and update the below section if you have images */}
            {/* <div className="app-img">
              <a href="https://play.google.com/store/apps/details?id=com.aztax" title="Google Play" target="_blank" rel="noopener noreferrer">
                <img src="img/googleapp.png" alt="googleplay" />
              </a>
              <a href="https://apps.apple.com/us/app/cpa-expense-tracker/id6443652633" title="App Store" target="_blank" rel="noopener noreferrer">
                <img src="img/appstore.png" alt="appstore" />
              </a>
            </div> */}
          </div>
          <div className="col-xl-6 pb-sm-0 pb-3" data-aos="fade-left">
            <img src={img1} alt="Invoicereceipts" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPASec;
