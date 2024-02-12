"use client";
import React, { useState, useEffect } from "react";
import CardComponent from "./ui/CardComponent";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const Page = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: "", email: "" });
  const [updateUser, setUpdateUser] = useState({ id: "", name: "", email: "" });

  console.log(users);

  //fetch users
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/users`);
        setUsers(response.data.reverse());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //create user
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/users`, newUser);
      setUsers([response.data, ...users]);
      setNewUser({ name: "", email: "" });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  //delete user
  const deleteUser = async (userId: number) => {
    try {
      await axios.delete(`${apiUrl}/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          User Management App
        </h1>
        {/* Create user */}
        {/* <form onSubmit={createUser} className="p-4 bg-blue-100 rounded shadow">
          <input
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <input
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="mb-2 w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add User
          </button>
        </form> */}
        <form action=""></form>
        {/* Display users */}
        <div className="space-y-2">
          {users.map((user) => {
            const { id, name, email } = user;
            return (
              <div
                key={id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
              >
                <CardComponent card={user} />
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
                  onClick={() => deleteUser(id)}
                >
                  Delete User
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
