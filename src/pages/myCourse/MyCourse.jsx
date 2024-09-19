import { useEffect, useState } from "react";
import CourseCard from "../Home/components/CourseCard";
import { baseUrl } from "../../config/config";

const MyCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`${baseUrl}/course?email=sadiqur057@gmail.com`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data?.data?.data)
        setCourses(data?.data.data);

      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  console.log(courses)
  if (loading) {
    return "Loading..."
  }

  return (
    <div className="course-container">
      {
        courses.map(course => <CourseCard key={course?.id} course={course} />)
      }
    </div>
  );
};

export default MyCourse;