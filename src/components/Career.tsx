import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Information Technology</h4>
                <h5>Otago Polytechnic, Auckland International Campus</h5>
              </div>
              <h3>2023–26</h3>
            </div>
            <p>
              Oct 2023 – Sep 2026. Relevant coursework: Software Development,
              Networking, Data Science, AI, Automation and Robotics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Customer Service and Checkout Operator</h4>
                <h5>Woolworths New Zealand</h5>
              </div>
              <h3>2023–NOW</h3>
            </div>
            <p>
              Dec 2023 – Present. Processing customer transactions accurately and
              resolving queries at the checkout. Supporting smooth daily store
              operations in a fast-paced team environment. Taking on additional
              responsibilities, strengthening communication and teamwork skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certifications</h4>
                <h5>Courses &amp; simulations</h5>
              </div>
              <h3>CERTS</h3>
            </div>
            <p>
              IBM Machine Learning with Python. Google Data Foundations. Meta
              Coding Interview Preparation. Microsoft Generative AI and Data
              Analysis. Deloitte Data Analytics and Cyber Job Simulation.
              OneRoadmap Data Analyst. Java Programming Certification
              (Udemy/Coursera). Git and GitHub Essentials (LinkedIn Learning).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
