import React, { useState } from 'react';
import {addClient} from "./API";
import {getClient} from "./API";
import '../styles/addClient.css'

function AddClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  function handleInputName(event) {
    setName(event.target.value);
  }
  function handleInputEmail(event) {
    setEmail(event.target.value);
  }
  function handleInputPassword(event) {
    setPassword(event.target.value);
  }
  function handleInputRole(event) {
    setRole(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Role:', role)

    addClient(name, email, password, role);
    // do something with the input value
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='adding_form'>
      <h2>Register new user</h2>
      <label>
        Name
        <input type="text" value={name} onChange={handleInputName}/>
      </label>
      <label>
        Email
        <input type="text" value={email} onChange={handleInputEmail} />
      </label>
      <label>
        Password
        <input type="text" value={password} onChange={handleInputPassword} />
      </label>
      <label>
        Role
        <input type="text" value={role} onChange={handleInputRole} />
      </label>
      <button type="submit">Register!</button>
    </form>
    </>
  );
}

export default AddClient;