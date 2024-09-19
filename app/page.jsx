

"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import UserService from '@/services/UserService';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(UserService.getUsers());
  }, []);

  const handleDelete = (id) => {
    UserService.deleteUser(id);
    setUsers(UserService.getUsers());
  };

  return (
    <div className="px-4">
    
      <div className="flex flex-col sm:flex-row justify-between bg-slate-400 p-3">
        <h1 className="text-lg sm:text-2xl ml-2 sm:ml-10 mt-2">User Management</h1>
        <Link className="bg-white rounded-3xl p-2 mt-2 sm:mr-10 text-center" href="/users/new">
          Create New User
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-slate-400 p-4 rounded-xl flex flex-col">
            <h2 className="font-bold text-lg">{user.name}</h2>
            <p className="text-sm">{user.email}</p>
            <p className="text-sm">{user.phonenumber}</p>
            <div className="mt-4 flex justify-between">
              <button className="bg-red-600 p-2 rounded-xl text-white" onClick={() => handleDelete(user.id)}>
                Delete
              </button>
              <Link className="bg-yellow-200 p-2 rounded-xl" href={`/users/${user.id}`}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Home