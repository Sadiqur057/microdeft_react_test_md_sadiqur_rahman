const CourseCard = ({ course }) => {
  const { title, description, badge_text, badge_color, instructor_name, email, image } = course || {}
  return (
    <div className="course-box">
      <div className="content-box">
        <img src={image} />
        <h1>{title}</h1>
        <p>{description}</p>

      </div>
    </div>
  );
};

export default CourseCard;