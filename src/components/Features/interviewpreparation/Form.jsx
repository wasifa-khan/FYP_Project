import React, { useState } from 'react';
import './FormButton.css';

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data here
    console.log(`First Name: ${firstName}, Last Name: ${lastName}, Role: ${role}`);
    setFirstName('');
    setLastName('');
    setRole('');
  };

  return (
    <div className='interview'>
    <form onSubmit={handleSubmit}>
      <label>
      <br></br><br></br>
      Enter Your Information[Optional]:
      <br></br><br></br>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <br></br><br></br><input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <br></br><br></br>  </label>
      <label>
        Choose the role you are interviewing for:<br></br><br></br>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select a role</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Web Developer">Web Developer</option>
          <option value="Software Quality Engineering">Software Quality Engineering</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Product Manager">Product Manager</option>
        </select>
      </label>
      <div className='interview'>
      <button type="Submit">Start</button>
      </div>
    </form>
    </div>
  );
}

export default Form;

