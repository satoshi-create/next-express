"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Cardwrpper from "@/app/ui/cardwrpper";
import axios from "axios";
import { sites } from "@/app/lib/constants";

interface User {
  id: number;
  name: string;
  email: string;
}

export default function Page() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  // const [users, setUsers] = useState<User[]>([]);
  // const [loading, setIsLoading] = useState(false);

  // console.log(loading);

  //fetch users
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/users`);
  //       setUsers(response.data.reverse());
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  //   setIsLoading(true);
  // }, []);

  return (
    <main>
      <Hero />
      <Cardwrpper sites={sites} title="プロジェクト" cat="projects" />
      {/* <About /> */}
      {/* {loading ? (
        users.map((user, index) => {
          return <p key={index}>{user.name}</p>;
        })
      ) : (
        <div>loading...</div>
      )} */}
    </main>
  );
}
