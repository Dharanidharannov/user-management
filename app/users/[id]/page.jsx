"use client"
import { useState, useEffect } from 'react';
import { useRouter,useParams } from 'next/navigation';
import UserForm from '../../../components/UserForm';
import UserService from '../../../services/UserService';

const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber,setPhonenumber] = useState('')
  const router = useRouter();
  const { id } = useParams()

  useEffect(() => {
    const user = UserService.getUserById(parseInt(id));
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhonenumber(user.phonenumber)
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { id: parseInt(id), name, email ,phonenumber};
    UserService.updateUser(updatedUser);
    router.push('/users');
  };

  return (
    <div className="p-4 sm:p-10 md:p-20 bg-slate-600 min-h-screen flex justify-center items-center">
    <div className="rounded-xl bg-white w-full sm:w-96 p-6 sm:p-8">
      <h1 className="mb-5 text-xl sm:text-2xl md:text-3xl text-center">Edit User</h1>
      <div className="max-w-lg mx-auto">
        <UserForm
          name={name}
          email={email}
          phonenumber={phonenumber}
          setName={setName}
          setEmail={setEmail}
          setPhonenumber={setPhonenumber}
          handleSubmit={handleSubmit}
          buttonLabel="update"
        />
      </div>
    </div>
  </div>
  );
};

export default EditUser;
