import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: 1,
      question: "What kind of transactions can I perform on this App?",
      answer: (
        <div>
          <p>Top 10 transactions which you can perform from this app:</p>
          <ul>
            <li>Invite your clients with custom subscription charges of your choice</li>
            <li>Receive all their expense Receipts / Bills / Payment Receipt digitally</li>
            <li>Perform Audits and Data Reconciliations</li>
            <li>Free Document Management for all your customers</li>
            <li>Invoice Creation and Follow-ups</li>
            <li>Report Generation (Excel / PDF)</li>
            <li>Dashboard reflecting your total portfolio</li>
            <li>Dashboard reflecting each customer portfolio</li>
            <li>Chat with your client</li>
            <li>Manage both business and personal Expenses for your clients</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      question: "What kind of transactions can clients perform through the App?",
      answer: (
        <div>
          <p>Top 10 transactions which you can perform from this app:</p>
          <ul>
            <li>Expense Receipts / Bills / Payment Receipt Capture</li>
            <li>Intelligent data extraction and storage for your taxes and sum totals</li>
            <li>Manual Expense Entry</li>
            <li>Invoice Creation</li>
            <li>Manual Income Entry</li>
            <li>Report Generation (Excel / PDF)</li>
            <li>Dashboard reflecting Tax Paid Vs Tax Collected</li>
            <li>Chat with your accountant</li>
            <li>Chat with your team member</li>
            <li>Manage your personal Expenses</li>
          </ul>
        </div>
      )
    },
    {
      id: 3,
      question: "How will I know my data is safe?",
      answer: (
        <div>
          <p>CPA Expense tracker follows highest standards of security both on user interface and developer interface. Code is written with a strong focus on data security and security compliance. With regular checks and balances been ticked on a timely basis, you can be rest assured about your data security.</p>
          <p>Access to your data will depend on your discretion and grant, with access been granted to your team members and to your identified CPAs, tool will only offer access and visibility of your data to these users. You will always have a control on revoking this access, and same can be performed directly from your app settings.</p>
        </div>
      )
    },
    {
      id: 4,
      question: "If I have issues with my App, whom shall I contact?",
      answer: (
        <div>
          <p>For reporting any issues, you can click on App Settings and then select “contact us”, add an explanation note and if possible, attach any screenshot if you are facing issues within the App.</p>
          <p>If you are unable to access the app and facing errors, simply write to <a href="mailto:support@expense-tracker.ca">support@expense-tracker.ca</a> with your explanations / screenshots.</p>
        </div>
      )
    },
    {
      id: 5,
      question: "If I would like to request some features / share some suggestions / provide feedback, whom shall I contact?",
      answer: (
        <div>
          <p>Please write to us at <a href="mailto:support@expense-tracker.ca">support@expense-tracker.ca</a> and we will surely take the guidance to technically move ahead with.</p>
        </div>
      )
    }
  ];

  return (
    <section className="faq-sec" id="faq">
      <div className="container">
        <h2 data-aos="fade-up" className="aos-init aos-animate">FAQ</h2>
        <div className="row">
          <div className="col-12">
            <div className="accordion" id="accordion">
              {faqItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <h4 className="accordion-header" id={`heading${item.id}`}>
                    <button 
                      className={`accordion-button ${activeIndex === item.id ? '' : 'collapsed'}`}
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeIndex === item.id}
                      aria-controls={`collapse${item.id}`}
                    >
                      {item.question}
                    </button>
                  </h4>
                  <div 
                    id={`collapse${item.id}`} 
                    className={`accordion-collapse collapse ${activeIndex === item.id ? 'show' : ''}`} 
                    aria-labelledby={`heading${item.id}`} 
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
