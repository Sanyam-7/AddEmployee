// AddEmployeeForm.jsx
import React, { useState } from "react";
import styles from "./AddEmployee.module.css";

const AddEmployeeForm = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      onAddEmployee(data); 
      setFormData({
        firstName: "",
        lastName: "",
        age: 0,
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className={styles.maindiv}>
      <h2 className={styles.headding}>Add Employee</h2>
      <form onSubmit={handleSubmit}>
       
          <h3>First Name</h3>
          <input 
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter Your FirstName"
            required
          />
        <br />
       <h3>Last Name</h3>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter Your LastName"
            required
          />
       
        <br />
        <h3>Age</h3>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Your Age"
            required
          />
      
        <br />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
