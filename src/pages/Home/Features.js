import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import img1 from "./images/subscription-icon.svg"
import img2 from "./images/data-icon.svg"
import img3 from "./images/security-icon.svg"
import img4 from "./images/crm-icon.svg"

const features = [
  {
    id: 1,
    imgSrc: img1,
    title: "Subscription Management Capability",
    detailTitle: "Subscription Management Capability",
    detailText:
      "Accountants access Subscription Management Capability directly through the CPA Portal, crafting personalized subscription plans for each business. We believe in tailored solutions—no one-size-fits-all approach here.",
  },
  {
    id: 2,
    imgSrc: img2,
    title: "Instant Expense Data Sync",
    detailTitle: "Instant Expense Data Sync",
    detailText:
      "Expense Tracking tool offers this cutting-edge technology which automates mundane tasks for CPAs seeking the top online tool for tracking customer expenses. It creates a digital repository of receipts and transactions, streamlining the process seamlessly.",
  },
  {
    id: 3,
    imgSrc: img4,
    title: "In-Built CRM Capabilities",
    detailTitle: "In-Built CRM Capabilities",
    detailText:
      "The Expense Tracker Tool provides CPAs with a platform to systematically manage each client. It includes features such as Document Management, Chat Systems, Audits, Reconciliations, Subscription Management Solutions, and Invoice Creation, offering strong technological capabilities tailored for every accountant.",
  },
  {
    id: 4,
    imgSrc: img3,
    title: "Data Security and Compliance",
    detailTitle: "Data Security and Compliance",
    detailText:
      "At CPA Expense Tracker, our foundation is rooted in cutting-edge technology that ensures the highest standards of data storage and encryption. We prioritize the utmost security and compliance to safeguard your sensitive information.",
  },
];

function FeatureBlock({ imgSrc, title, detailTitle, detailText }) {
  return (
    <div
      className="col-lg-4 col-sm-6 aos-init aos-animate"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="300"
    >
      <div className="feat-block">
        <div className="icon">
          <img className="feat-icon-img" src={imgSrc} alt={title} />
        </div>
        <h4>{title}</h4>
        <div className="detail">
          <h4>{detailTitle}</h4>
          <p>{detailText}</p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="features-sec" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <h2 data-aos="fade-up" className="aos-init aos-animate">
              Features
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {features.map((feature) => (
            <FeatureBlock
              key={feature.id}
              imgSrc={feature.imgSrc}
              title={feature.title}
              detailTitle={feature.detailTitle}
              detailText={feature.detailText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
