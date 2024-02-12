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

  return (
    // <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    //   <div className="space-y-4 w-full max-w-2xl">
    //     <h1 className="text-2xl font-bold text-gray-800 text-center">
    //       User Management App
    //     </h1>
    //   </div>
    // </main>

    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1>User Management App</h1>
      {/* Display users */}
      {/* <div className="space-y-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
          >
            <CardComponent card={user} />
            <button
              // onClick={() => deleteUser(user.id)}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            >
              Delete User
            </button>
          </div>
        ))} */}
      <div className="space-y-2">
        {users.map((user) => (
          <div></div>
        ))}
        <button className="">Delete User</button>
      </div>
    </main>
  );
};

export default Page;
