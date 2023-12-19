// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [dataForm, setDataForm] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setDataForm(values => ({ ...values, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dataForm);
  }

  const isFormIncomplete = Object.values(dataForm).some(value => value === '');

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={dataForm.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={dataForm.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={dataForm.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <button type="submit" disabled={isFormIncomplete}>
        Sign In
      </button>
    </form>
  );
}

export default App;
