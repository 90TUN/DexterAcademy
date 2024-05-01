import React from "react";

function MyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      phone: e.target.elements.phone.value,
      message: e.target.elements.message.value,
      age: e.target.elements.age.value,
    };
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="first_name"></label>
      <input
        type="text"
        id="first_name"
        name="first_name"
        placeholder="Enter your first name"
        required
      />
      <br />
      <br />

      <label htmlFor="last_name"></label>
      <input
        type="text"
        id="last_name"
        name="last_name"
        placeholder="Enter your last name"
        required
      />
      <br />
      <br />

      <label htmlFor="email"></label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        required
      />
      <br />
      <br />

      <label htmlFor="Phone_number"></label>
      <input
        type="tel"
        id="Phone_number"
        name="Phone_number"
        placeholder="Phone number"
        pattern="[0-9]{10}"
        required
      />
      <br />
      <br />

      <label htmlFor="Phone_number"></label>
      <input
        type="text"
        id="Course"
        name="Course"
        placeholder="Course of Interest"
        required
      />
      <br />
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default MyForm;
