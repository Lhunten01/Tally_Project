// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleNavbar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   return (
//     <nav className="main-menu navbar navbar-expand-lg navbar-light fixed-top">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <img src="img/cpa-logo.svg" alt="Expense Tracker" height="80" />
//         </Link>
//         <a
//           href="https://cpa.expense-tracker.ca/cpa/signup"
//           target="blank"
//           className="btn btn-secondary d-lg-none"
//           title="CPA Portal"
//         >
//           CPA Portal
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={toggleNavbar}
//           aria-controls="navbarNav"
//           aria-expanded={!isCollapsed}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
//           <ul className="mx-auto navbar-nav">
//             <li className="nav-item active">
//               <Link className="nav-link" to="/" title="Home">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about" title="About">
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/how-it-works" title="How it works">
//                 How it works
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/features" title="Features">
//                 Features
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/faq" title="FAQ">
//                 FAQ
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact" title="Contact">
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           <div className="d-flex nav-right">
//             <a
//               className="btn btn-secondary"
//               href="https://cpa.expense-tracker.ca/cpa/signup"
//               target="blank"
//               title="CPA Portal"
//             >
//               CPA Portal
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "./images/cpa-logo.svg"
const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="main-menu navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src={img} alt="Expense Tracker" height="80" />
        </a>
        <a
          href="https://cpa.expense-tracker.ca/cpa/signup"
          target="blank"
          className="btn btn-secondary d-lg-none"
          title="CPA Portal"
        >
          CPA Portal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="mx-auto navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#banner" title="Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" title="About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works" title="How it works">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" title="Features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq" title="FAQ">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" title="Contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex nav-right">
            <a
              className="btn btn-secondary"
              href="https://cpa.expense-tracker.ca/cpa/signup"
              target="blank"
              title="CPA Portal"
            >
              CPA Portal
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
