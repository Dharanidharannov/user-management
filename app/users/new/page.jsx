"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserForm from '../../../components/UserForm';
import UserService from '../../../services/UserService';

const NewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email, phonenumber };
    UserService.addUser(newUser);
    router.push('/users');
  };

  return (
    <div className="p-4 sm:p-10 md:p-20 bg-slate-600 min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-full sm:w-96 p-6 sm:p-8">
        <h1 className="mb-5 text-xl sm:text-2xl md:text-3xl text-center">Create New User</h1>
        <div className="max-w-lg mx-auto">
          <UserForm
            name={name}
            email={email}
            phonenumber={phonenumber}
            setName={setName}
            setEmail={setEmail}
            setPhonenumber={setPhonenumber}
            handleSubmit={handleSubmit}
            buttonLabel="Create"
          />
        </div>
      </div>
    </div>
  );
};

export default NewUser;

