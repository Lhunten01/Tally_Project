import React, { useState } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import img1 from "../../images/inbox_flatline.png"
const ContactSection = () => {
  const [formData, setFormData] = useState({
    fradio: "true",
    "fradio-2": "",
    fspefy: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", formData);
  };

  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <h2 data-aos="fade-up">Contact</h2>
        <div className="contact-form" data-aos="fade-up">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="inpox-img">
                <img src={img1} alt="inbox_flatline" />
              </div>
            </div>
            <div className="col-md-8">
              <form method="POST" id="contactus-form" onSubmit={handleSubmit}>
                <h3 className="sub-title">Send us a message</h3>
                <div className="radio-title mb-1">
                  Are you a practicing Accountant
                </div>
                <div className="radio-field mb-2">
                  <div className="radio">
                    <input
                      id="fyes"
                      name="fradio"
                      value="true"
                      type="radio"
                      checked={formData.fradio === "true"}
                      onChange={handleChange}
                    />
                    <label htmlFor="fyes" className="radio-label">
                      Yes
                    </label>
                  </div>
                  <div className="radio">
                    <input
                      id="fno"
                      name="fradio"
                      value="false"
                      type="radio"
                      checked={formData.fradio === "false"}
                      onChange={handleChange}
                    />
                    <label htmlFor="fno" className="radio-label">
                      No
                    </label>
                  </div>
                </div>
                <div className="radio-title mb-1">How did you found us?</div>
                <div className="radio-field mb-3">
                  <div className="radio">
                    <input
                      id="fgoogle"
                      name="fradio-2"
                      value="Google"
                      type="radio"
                      checked={formData["fradio-2"] === "Google"}
                      onChange={handleChange}
                    />
                    <label htmlFor="fgoogle" className="radio-label">
                      Google
                    </label>
                  </div>
                  <div className="radio">
                    <input
                      id="fapp"
                      name="fradio-2"
                      value="Fellow Accountant"
                      type="radio"
                      checked={formData["fradio-2"] === "Fellow Accountant"}
                      onChange={handleChange}
                    />
                    <label htmlFor="fapp" className="radio-label">
                      Fellow Accountant
                    </label>
                  </div>
                  <div className="radio">
                    <input
                      id="fcolli"
                      name="fradio-2"
                      value="Your Customer"
                      type="radio"
                      checked={formData["fradio-2"] === "Your Customer"}
                      onChange={handleChange}
                    />
                    <label htmlFor="fcolli" className="radio-label">
                      Your Customer
                    </label>
                  </div>
                  <div className="radio">
                    <input
                      id="fsocial"
                      name="fradio-2"
                      value="Social Media"
                      type="radio"
                      checked={formData["fradio-2"] === "Social Media"}
                      onChange={handleChange}
                    />
                    <label htmlFor="fsocial" className="radio-label">
                      Social Media
                    </label>
                  </div>
                </div>
                <div className="row" id="spefy-2">
                  <div className="col-md-12">
                    <div className="formfield">
                      <textarea
                        id="fspefy"
                        className="form-control"
                        name="fspefy"
                        value={formData.fspefy}
                        onChange={handleChange}
                        placeholder="Please Specify"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="formfield">
                      <input
                        id="name"
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                      />
                      <label htmlFor="name">Name *</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="formfield">
                      <input
                        id="phone"
                        type="text"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        maxLength="10"
                        pattern="[0-9]*"
                      />
                      <div id="phone-error-2" className="txt-danger"></div>
                      <label htmlFor="phone">Phone Number</label>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="formfield">
                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                      />
                      <span
                        className="mail_errors txt-danger"
                        style={{ display: "none" }}
                      >
                        * Not valid E-mail
                      </span>
                      <label htmlFor="email">E-mail *</label>
                    </div>
                  </div>
                  <div className="cont-err">
                    <button
                      title="Send"
                      id="contact_send_btn"
                      className="btn btn-primary btn-middle"
                    >
                      Send
                    </button>
                    <div id="concaterror"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
