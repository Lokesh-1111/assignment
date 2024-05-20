function CourseItem({ title, description }) {
    return (
      <div className="course-item">
        <div className="course-info">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <button className="view-curriculum">View Curriculum</button>
      </div>
    );
  }

export default CourseItem