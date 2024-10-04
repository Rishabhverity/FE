import React, { useState } from "react";

function Profile () {
    
  // Setting up state to store the form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: ""
  });

  // Handling input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with form data, such as sending it to a server
    console.log("Form submitted: ", formData);
  };

  return (
    
    <div className="ml-[700px] mt-[200px] border-8 border-blue-600 rounded-tr-lg shadow-md p-20 bg-gray-300">
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="name">Name:</label>
        <input className=" mb-5 border-2 ml-2 border-gray-700"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input className="mb-5 border-2 ml-2 border-gray-700"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number:</label>
        <input className="mb-5 border-2 ml-2 border-gray-700"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="specialization">Specialization:</label>
        <input className="mb-5 border-2 ml-2 border-gray-700"
          type="text"
          id="specialization"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
          required
        />
      </div>
      <button className="border-blue-600 border-4 py-1 px-8 rounded-tr-lg ml-[85px] bg-blue-500  hover:bg-blue-700 text-white" type="submit">Submit</button>
    </form>
    </div>
    
  );
};


export default Profile;