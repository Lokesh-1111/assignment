import React from 'react'

const OfferPage = () => {
  return (
    <div className="container">
      <header>
        <h1>Don't miss out on this <span className="highlight">limited-time opportunity</span> to learn for <span className="highlight">Free</span>!</h1>
        <div className="offer">
          <div className="offer-details">
            <h2>100% Refund Offer 😎</h2>
            <p>20 Seats Left</p>
            <p>Offer ends in 10:00 Mins</p>
          </div>
        </div>
      </header>
      <main>
        <h2>How does it work?</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1</h3>
            <p>Enroll into your favorite course for only ₹1,499</p>
            <p>Start Learning with Lifetime Course Access.</p>
          </div>
          <div className="step">
            <h3>Step 2</h3>
            <p>Complete Course & Assignments within 2 Years!</p>
            <p>Finish the course within 2 Years to Qualify for Refund.</p>
          </div>
          <div className="step">
            <h3>Step 3</h3>
            <p>Receive 100% Refund upon completion</p>
            <p>Upon Course Completion within 2 Years, Get Your ₹1,499 Back.</p>
          </div>
        </div>
      </main>
      </div>
  )
}

export default OfferPage
