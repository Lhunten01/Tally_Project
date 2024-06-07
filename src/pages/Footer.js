import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from '../images/cpa-logo.svg'
import img2 from '../images/cpa-android.png'
import img3 from '../images/cpa-ios.png'
const Footer = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <footer data-aos="fade-in" className="aos-init">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-5" data-aos="fade-up">
            <div className="footer-logo">
              <a href="index.html">
                <img
                  className="mobile-logo"
                  src={img1}
                  alt="logo"
                  width="160"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-5 footer-nav" data-aos="fade-up">
            <h4 className="foot-title">QUICK LINKS</h4>
            <div className="row">
              <div className="col-sm-6 col-5">
                <ul>
                  <li>
                    <a href="#works" title="How it works">
                      How it works
                    </a>
                  </li>
                  <li>
                    <a href="#features" title="Features">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#faq" title="FAQ">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-7">
                <ul>
                  <li>
                    <a href="privacy.html" title="Privacy">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="terms.html" title="Terms &amp; Conditions">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-7 footer-app"
            data-aos="fade-up"
          >
            <h4 className="foot-title">APP DOWNLOAD</h4>
            <div className="foot-bar">
              <img src={img2} alt="QR Code" />
              <span>Google Play</span>
            </div>
            <div className="foot-bar">
              <img src={img3} alt="QR Code" />
              <span>Apple Store</span>
            </div>
          </div>
        </div>
        <div className="row justify-content-between footer-end">
          <div className="col-md-6">
            <p className="copyright-txt">
              Copyright <span>{new Date().getFullYear()}</span> 2024 © AZ Tax
              Solutions Inc. All rights reserved
            </p>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a
                href="https://www.facebook.com/cpa.expense.tracker"
                title="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/az-tax-solutions"
                title="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                href="https://twitter.com/cpa_expense"
                title="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter-square"></i>
              </a>
              <a
                href="https://www.instagram.com/cpa_expense_tracker"
                title="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className="iconify iconify--skill-icons"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 256 256"
                    data-icon="skill-icons:instagram"
                  >
                    <g fill="none">
                      <rect
                        width="256"
                        height="256"
                        fill="url(#IconifyId18fc7141390dde9950)"
                        rx="60"
                      ></rect>
                      <rect
                        width="256"
                        height="256"
                        fill="url(#IconifyId18fc7141390dde9951)"
                        rx="60"
                      ></rect>
                      <path
                        fill="#fff"
                        d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                      ></path>
                      <defs>
                        <radialGradient
                          id="IconifyId18fc7141390dde9950"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FD5"></stop>
                          <stop offset=".1" stopColor="#FD5"></stop>
                          <stop offset=".5" stopColor="#FF543E"></stop>
                          <stop offset="1" stopColor="#C837AB"></stop>
                        </radialGradient>
                        <radialGradient
                          id="IconifyId18fc7141390dde9951"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#3771C8"></stop>
                          <stop offset=".128" stopColor="#3771C8"></stop>
                          <stop offset="1" stopColor="#60F" stopOpacity="0"></stop>
                        </radialGradient>
                      </defs>
                    </g>
                  </svg>
                </i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCFyF91ROZrus_ZxlZA9y4qQ"
                title="youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
