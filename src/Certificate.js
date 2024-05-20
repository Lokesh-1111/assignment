import React from 'react'

const Certificate = () => {
  return (
    <div className="certificates-container">
      <h1>Unlock <span className="highlight">6 Certificates</span> & Internship Opportunities!</h1>
      <div className="content-container">
        <div className="certificate-section">
          <h2>Get 6 Industry Recognized Certificates!</h2>
          <div className="certificate-card">
            <img src="certificate.png" alt="Certificate" />
            <p>Official and Verified</p>
            <p>Enhances Credibility</p>
          </div>
        </div>
        <div className="internship-section">
          <h2>Bag Internship Opportunities!</h2>
          <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
          <img src="internship.png" alt="Internship" />
        </div>
      </div>
    </div>
  )
}

export default Certificate