import React, { useState } from 'react';
import {addClient} from "./API";
import {getClient} from "./API";
import '../styles/addobject.css'

function AddObject() {
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleInputID(event) {
    setID(event.target.value);
  }
  function handleInputName(event) {
    setName(event.target.value);
  }
  function handleInputEmail(event) {
    setEmail(event.target.value);
  }
  function handleInputPassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('ID: ', id);
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)

    addClient(Number(id), name, email, password);
    // do something with the input value
  }

  return (
    <>
    <form onSubmit={handleSubmit} className='adding_form'>
      Add Room
      <label>
        ID
        <input type="text" value={id} onChange={handleInputID} />
      </label>
      <label>
        Name
        <input type="text" value={name} onChange={handleInputName} />
      </label>
      <label>
        Email
        <input type="text" value={email} onChange={handleInputEmail} />
      </label>
      <label>
        Password
        <input type="text" value={password} onChange={handleInputPassword} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default AddObject;