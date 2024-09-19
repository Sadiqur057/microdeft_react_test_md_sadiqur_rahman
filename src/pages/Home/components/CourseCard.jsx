const CourseCard = ({ course }) => {
  const { title, description, badge_text, badge_color, instructor_name, email, image } = course || {}
  return (
    <div className="course-box">
      <div className="content-box">
        <div className="img-box">
          <img src={image} className="course-image" />
          <p className='badge'>{badge_text}</p>
        </div>
        <h1>{title}</h1>
        <p>{description.slice(0, 80)}...</p>
      </div>
      <div className="action-box">
        <button>View Details</button>
      </div>
    </div>
  );
};

export default CourseCard;