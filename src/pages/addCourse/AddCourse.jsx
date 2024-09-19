import { baseUrl } from "../../config/config";

const AddCourse = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const badge_text = form.badge_text.value;
    const badge_color = form.badge_color.value;
    const instructor_name = form.instructor_name.value;
    const email = form.email.value;
    const formData = { title, description, badge_text, badge_color, instructor_name, email }
    console.log(formData)

    try {
      const response = await fetch(`${baseUrl}/course`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'content-type': 'application/json'
        }
      })
      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}
        className="form-container box-shadow"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter title"
        />
        <textarea
          type="text"
          name="description"
          placeholder="Enter description"
        />
        <input
          type="text"
          name="badge_text"
          placeholder="Enter badge text"
        />
        <input
          type="text"
          name="badge_color"
          placeholder="Enter badge color"
        />
        <input
          type="text"
          name="instructor_name"
          placeholder="Enter instructor name"
        />
        <input
          type="text"
          hidden
          name="email"
          defaultValue="sadiqur057@gmail.com"
        />
        <input
          type="submit"
          value="Submit" />
      </form >
    </div>
  );
};

export default AddCourse;