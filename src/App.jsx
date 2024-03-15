import { useState } from "react";

export default function App() {
  const [firstName,setFirstName] = useState("");
  function handleChange(event) {
    setFirstName(event.target.value);
    console.log(firstName);
  }
  return (
    <>
      <form>
        <input type="text" placeholder="First Name" onChange={handleChange} />
      </form>
      <p>Hello,{firstName}</p>
    </>
  );
}
