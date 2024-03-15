import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comment: "",
    isReady: false,
    employment: "",
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: type === "checkbox" ? checked : value };
    });
  }
  console.log(formData);
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
        <br />
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <textarea
          type="text"
          placeholder="comment"
          onChange={handleChange}
          name="comment"
          value={formData.comment}
        />
        <br />
        <input
          type="checkbox"
          id="isReady"
          onChange={handleChange}
          checked={formData.isReady}
          name="isReady"
        />
        <label htmlFor="isReady"> isReady ?</label>
        <br />
        <input
          type="radio"
          id="employed"
          onChange={handleChange}
          value="employed"
          name="employment"
        />
        <label htmlFor="employed"> employed</label>
        <input
          type="radio"
          id="selfEmployed"
          onChange={handleChange}
          value="selfEmployed"
          name="employment"
        />
        <label htmlFor="selfEmployed"> self-employed</label>
        <input
          type="radio"
          id="unEmployed"
          onChange={handleChange}
          value="unEmployed"
          name="employment"
        />
        <label htmlFor="unEmployed">un-employed</label>
        <br />
        <label htmlFor="favColor">what is your fav color?</label>
        <select name="" id="">
          <option value="">red</option>
          <option value="">red</option>
          <option value="">red</option>
          <option value="">red</option>
        </select>
      </form>
      <p>
        Hello,{formData.firstName} {formData.lastName}
      </p>
    </>
  );
}
