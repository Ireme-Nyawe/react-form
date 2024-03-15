import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comment: "",
    isReady: false,
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
    console.log(formData);
  }
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />

        <textarea
          type="text"
          placeholder="comment"
          onChange={handleChange}
          name="comment"
          value={formData.comment}
        />
        <input
          type="checkbox"
          id="isReady"
          onChange={handleChange}
          checked={formData.isReady}
          name="isReady"
        />
        <label htmlFor="isReady"> isReady ?</label>
      </form>
      <p>
        Hello,{formData.firstName} {formData.lastName}
      </p>
    </>
  );
}
