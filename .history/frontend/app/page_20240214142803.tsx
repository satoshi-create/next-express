import React from "react";
import Header from "./ui/Header";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>welcome to my portfolio page!!</h1>
      <Link href="portfolio">
        <button>
          <span>Log in</span>{" "}
        </button>
      </Link>
    </div>
  );
};

export default Home;
