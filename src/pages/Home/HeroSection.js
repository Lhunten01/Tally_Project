// import './Herosection.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../images/hero_banner.png';
import img2 from '../../images/btn-primary.png';
import img3 from '../../images/app-store.png';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hero-content">
            <div className="hero-left fade-in">
              <h1>Expense Management for growing businesses</h1>
              <p>Introducing the most efficient and user-friendly expense tracker on the market. We strive to make accounting fun and empowering so that you can live a life of financial freedom.</p>
              <h4>Get Started!</h4>
            </div>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Please enter your email" id="email_subs" name="email_subs"/>
              <button className="btn btn-primary" type="button" id="subs_btn" name="subs_btn" title="Subscribe">Submit</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-right fade-in">
              <img src={img1} alt="banner_img"/>
              <div className="app-links">
                <a href="https://play.google.com/store/apps/details?id=com.aztax" title="Google Play" target="blank"><img src={img2} alt="Google Play"/></a>
                <a href="https://apps.apple.com/us/app/cpa-expense-tracker/id6443652633" title="App Store" target="blank"><img src={img3} alt="App Store"/></a>
                <a href="https://cpa.expense-tracker.ca/cpa/signup" target="blank" className="btn btn-secondary d-lg-inline-block d-none" title="CPA Portal">CPA Portal</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
