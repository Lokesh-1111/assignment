import React from 'react'
import CourseItem from './CourseItem';

const Course = () => {
    return (
        <div className="course">
          <header className="header">
            <div className="learning-path">DATASCIENCE COURSE LEARNING PATH</div>
            <h1 className="title">
              <span className="course-highlight">Data Science</span> Course Curriculum
            </h1>
          </header>
          <main className="course-list">
            <CourseItem
              title="C++"
              description="Learn C++ for strong programming fundamentals."
            />
            <CourseItem
              title="MERN Stack"
              description="Master the MERN stack for high-demand projects."
            />
            <CourseItem
              title="Data Structure & Algorithm"
              description="Excel in Data Structures and Algorithms for interview success."
            />
            <CourseItem
              title="Competitive Programming"
              description="Excel in Data Structures and Algorithms for interview success."
            />
          </main>
        </div>
      );
}

export default Course


// export default App;