import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WorkStep from './WorkStep'; 
import '../WorkSection.css';
import img1 from '../images/step-1-new.png';
import img2 from '../images/step-2-new.png';
import img3 from '../images/step-3.png';
import img4 from '../images/step-4.png';
import img5 from '../images/step-5-new.png';
import img6 from '../images/step-6.png'
const WorksSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const steps = [
    {
      stepNumber: 1,
      title: 'Create your Free Account',
      description: "It's completely FREE for Accountants! No costs, no commitments—just powerful tools to transform your accounting practice without spending a time.",
      imgSrc: img1,
      imgAlt: 'Create your Free Account',
      reverse: false,
    },
    {
      stepNumber: 2,
      title: 'Create your network by adding your customer effortlessly',
      description: 'Extend an exclusive invitation to your client(s) by simply filling out a basic form and tailoring a custom subscription that perfectly suits their needs. Elevate their experience effortlessly.',
      imgSrc: img2,
      imgAlt: 'Customer Spends – CPA Audits',
      reverse: true,
    },
    {
      stepNumber: 3,
      title: 'Ease of Access and Utilization',
      description: 'Customers receive their exclusive invitations via email and promptly download the CPA Expense Tracker App from both iOS and Google Play stores. With their selected username and a temporary password, users seamlessly log into the app, finalizing the connection between their mobile interface and the Accountants CPA Portal. This step marks the perfect union between their user experience and the accountant\'s dedicated platform.',
      imgSrc: img3,
      imgAlt: 'Proper checks and balances',
      reverse: false,
    },
    {
      stepNumber: 4,
      title: 'Seamless synchronization of highest degree',
      description: 'Users initiate the expense tracking process by effortlessly scanning or uploading their receipts within the app. The app intelligently identifies crucial details such as the vendor name, expense date, amount spent, taxes paid, and more. Your stored data is promptly transmitted to your accountant\'s dashboard, ensuring seamless synchronization of all your transactions.',
      imgSrc: img4,
      imgAlt: 'Be in touch with your customers',
      reverse: true,
    },
    {
      stepNumber: 5,
      title: 'Precision in Audits, Meticulous Documentation, and Flawless Reconciliations',
      description: 'The tool provides comprehensive business-wise consolidation, audit, and reconciliation capabilities tailored for Accountants. Each added transaction undergoes verification, ensuring accuracy and reliability. These functionalities can be efficiently executed for every business added by the accountants, ensuring meticulous oversight and management across the board.',
      imgSrc: img5,
      imgAlt: 'Proper checks and balances',
      reverse: false,
    },
    {
      stepNumber: 6,
      title: 'Unlock Success: Communication is Key.',
      description: 'The CPA Expense Tracker introduces real-time chat features, fostering seamless communication between Accountants and Business Owners. Furthermore, it provides a sophisticated document storage system for each business and empowers users to effortlessly generate comprehensive reports on added expenses and various transactions.',
      imgSrc: img6,
      imgAlt: 'Be in touch with your customers',
      reverse: true,
    },
  ];

  return (
    <section className="works-section" id="works">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="pb-0 pb-md-5 pb-lg-0" data-aos="fade-up">How it works</h2>
          </div>
        </div>
      </div>

      <div className="tab-content">
        <div id="cpa1" className="tab-pane active">
          {steps.map((step) => (
            <WorkStep
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
              imgSrc={step.imgSrc}
              imgAlt={step.imgAlt}
              reverse={step.reverse}
            />
          ))}
        </div>

        <div id="bus1" className="container tab-pane fade">
          {/* Other content for the bus1 tab can go here */}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
