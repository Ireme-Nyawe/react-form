import { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  function handleChange(event) {
    setFormData((prevData) => {
      return { ...prevData, [event.target.name]: event.target.value };
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
      </form>
      <p>
        Hello,{formData.firstName} {formData.lastName}
      </p>
    </>
  );
}
