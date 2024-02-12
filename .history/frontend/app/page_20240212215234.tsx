import React, { useState ,useEffect} from "react";
import CardComponent from "./ui/CardComponent";

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
  return <div>frontend page</div>;
};

export default Page;
