import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    accountant: 'true',
    foundUs: '',
    specify: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted: ', formData);
    // Add form submission logic here
  };

  return (
    <form id="get-demo" method="POST" onSubmit={handleSubmit}>
      <div className="form-group">
        <h5>For cpa</h5>
        <div className="radio-title mb-1">Are you a practicing Accountant</div>
        <div className="radio-field mb-2">
          <div className="form-check">
            <input
              id="yes"
              name="accountant"
              value="true"
              type="radio"
              checked={formData.accountant === 'true'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="yes" className="form-check-label">Yes</label>
          </div>
          <div className="form-check">
            <input
              id="no"
              name="accountant"
              value="false"
              type="radio"
              checked={formData.accountant === 'false'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="no" className="form-check-label">No</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="radio-title mb-1">How did you found us?</div>
        <div className="radio-field pb-4">
          <div className="form-check">
            <input
              id="google"
              name="foundUs"
              value="Google"
              type="radio"
              checked={formData.foundUs === 'Google'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="google" className="form-check-label">Google</label>
          </div>
          <div className="form-check">
            <input
              id="app"
              name="foundUs"
              value="Fellow Accountant"
              type="radio"
              checked={formData.foundUs === 'Fellow Accountant'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="app" className="form-check-label">Fellow Accountant</label>
          </div>
          <div className="form-check">
            <input
              id="colli"
              name="foundUs"
              value="Your Customer"
              type="radio"
              checked={formData.foundUs === 'Your Customer'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="colli" className="form-check-label">Your Customer</label>
          </div>
          <div className="form-check">
            <input
              id="social"
              name="foundUs"
              value="Social Media"
              type="radio"
              checked={formData.foundUs === 'Social Media'}
              onChange={handleChange}
              className="form-check-input"
            />
            <label htmlFor="social" className="form-check-label">Social Media</label>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="form-group">
            <textarea
              id="demo-spefy"
              className="form-control"
              name="specify"
              value={formData.specify}
              onChange={handleChange}
              placeholder="Please Specify"
            ></textarea>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              id="demo-fullname"
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name *"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              id="demo-email"
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail *"
              required
            />
            <div id="demoerror" className="mb-2" style={{ color: '#fff' }}></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              id="demo-phone"
              type="tel"
              className="form-control"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              maxLength="10"
              pattern="[0-9]{10}"
            />
            <div id="phone-error" className="mb-2" style={{ color: '#fff' }}></div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-1 d-flex">
        <button
          type="submit"
          id="get_demo_btn"
          className="btn btn-primary"
          title="Schedule Demo"
        >
          SCHEDULE A DEMO
        </button>
        <div id="concaterror_two" className="text-center mt-2" style={{ color: '#fff' }}></div>
      </div>
    </form>
  );
};

export default DemoForm;
