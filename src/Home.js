import React from 'react'

const Home = () => {
  return (
    <div className="App">
    <header className="App-header">
      <div className="logo">LOGO</div>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
    </header>
    <div className='App-content'>
    <nav className="navbar">
        <a href="#overview">Overview</a>
        <a href="#curriculum">Curriculum</a>
        <a href="#refund">Refund</a>
        <a href="#testimonials">Testimonials</a>
      </nav>
    </div>
    <main>
      <section className="initiative">
        <span role="img" aria-label="graduation cap">🎓</span> An <strong>IIT Delhi</strong> Alumni Initiative
      </section>
      <section className="main-content">
        <h1>Become an Expert in the field of <span className="highlight">Data Science</span> with 6 courses</h1>
        <p>A specially crafted Tech Kickstarter, with <strong>5+ extensive online courses</strong>.</p>
        <div className="badges">
          <span className="badge">Personal Mentorship</span>
          <span className="badge">Internship Assistance</span>
          <span className="badge">Industry Certified Courses</span>
        </div>
        <div className="buttons">
          <button className="enroll">Enroll Now</button>
          <button className="know-more">Know More</button>
        </div>
      </section>
      <section className="stats">
        <div className="stat stat-r">
          <p>24 Courses</p>
        </div>
        <div className="stat stat-r">
          <p>30k+ Learners</p>
        </div>
        <div className="stat stat-r">
          <p>100k+ Doubts Solved</p>
        </div>
        <div className="stat">
          <p>10k+ Student Projects</p>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Home

