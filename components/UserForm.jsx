import React from 'react';

const UserForm = ({ name, email, setName, handleSubmit, buttonLabel,phonenumber,setEmail,setPhonenumber }) => {
  return (
    <form onSubmit={handleSubmit} >
      <input
        className='border-2 mb-2 p-2 w-72 ronded '
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      /> <br />
      <input
      className='border-2 mb-2 p-2 w-72 rounded'
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      /> <br />
      <input 
       className='border-2 p-2 w-72 rounded'
      type="phone" name="number" placeholder='number' value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/> <br />
      <button className='mt-5 ml-5 bg-teal-400 w-30 p-2 rounded' type="submit">{buttonLabel}</button>
    </form>
  );
};

export default UserForm;
