import React from 'react'

const Internship = () => {
  return (
    <div className="internship-container">
      <h1>How does the Internship Program works?</h1>
      <div className="steps-container">
        <div className="step">
          <div className="icon">👤</div>
          <p>Learn from our structured pre-recorded courses made by experts to meet industry needs</p>
        </div>
        <div className="step">
          <div className="icon">👤</div>
          <p>1:1 live doubt solving support available throughout the day to clear your doubts instantly</p>
        </div>
        <div className="step">
          <div className="icon">👤</div>
          <p>Personal mentors to guide and help you throughout your journey as a friend</p>
        </div>
        <div className="step">
          <div className="icon">👤</div>
          <p>Build major projects which makes your resume stand apart</p>
        </div>
        <div className="step">
          <div className="icon">👤</div>
          <p>Get guaranteed paid internships after completion of the program along with course completion certificates</p>
        </div>
      </div>
      <button className="apply-button">Apply now for ₹ 2999</button>
    </div>
  )
}

export default Internship

