import React from "react";
import CardComponent  from "./ui/CardComponent";

interface User {
  id: number;
  name: string;
  email: string;
}

const page = () => {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
  return <div>frontend page</div>;
};

export default page;
