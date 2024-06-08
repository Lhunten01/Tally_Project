import React from 'react';
import "../WorkSection.css";
const WorkStep = ({ stepNumber, title, description, imgSrc, imgAlt, reverse }) => {
  return (
    <div className="web-block">
      <div className="container-fluid">
        <div className={`row works-block ${reverse ? 'two' : ''}`}>
          <div className={`col-md-6 ${reverse ? '' : 'p-0'}`} data-aos={reverse ? 'fade-right' : 'fade-left'}>
            <div className={`works-box ${reverse ? 'web' : 'web-left'}`}>
              <img src={imgSrc} className="works-img" alt={imgAlt} />
            </div>
          </div>
          <div className={`col-md-6 ${reverse ? 'p-0' : ''}`} data-aos={reverse ? 'fade-left' : 'fade-right'}>
            <div className={`works-text ${reverse ? 'pad-rgt' : 'pad-let'}`}>
              <p>Step {stepNumber}</p>
              <h3 className="title">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkStep;