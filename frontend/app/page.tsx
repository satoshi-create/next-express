"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/app/ui/hero";
import About from "@/app/ui/about";
import Cardwrpper from "@/app/ui/cardwrpper";
import axios from "axios";
import { designs } from "@/app/lib/constants";
import Footer from "@/app/ui/footer";
import GridImages from "@/app/ui/gridImages";
import { User, Sites, Designs } from "@/app/lib/types";
import { supabase } from "./supabaseClient";

// TODO: tailwindcss - pxからremへの変換法
// TODO: tailwindcss - font family のベストプラクティス
// TODO: tailwindcss - @/appは使うべき？
// TODO:nextjs14 - 新しいnext/imageの変更点 ⇒ done
// TODO:typescript - interfaceの使い方

// TODO: docker - backend側の処理がatchに反映されずリロードが必要
// TODO:prisma - prisma studioで謎のエラーが頻発
export default function Page() {
  // const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [users, setUsers] = useState<User[]>([]);
  const [sites, setSites] = useState<Sites[]>([]);
  const [designs, setDesigns] = useState<Designs[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [clients, setClients] = useState([]);

  // fetch sites
  useEffect(() => {
    const fetchData = async () => {
      let { data: Sites, error } = await supabase.from("Sites").select("title");
      console.log(Sites);
      console.log(error);
    };

    fetchData();
    setIsLoading(false);
  }, []);

  // fetch Designs
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/designs`);
  //       setDesigns(response.data.reverse());
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  //   setIsLoading(false);
  // }, []);

  // // fetch users
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
  //   setIsLoading(false);
  // }, []);

  // // fetch clients
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${apiUrl}/clients`);
  //       setClients(response.data.reverse());
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  //   setIsLoading(false);
  // }, []);

  return (
    <main>
      <Hero />
      {/* {loading ? (
        <div>loading...</div>
      ) : (
        users.map((user, index) => {
          return (
            <p key={index}>
              {user.name} <span>{user.email}</span>
            </p>
          );
        })
      )} */}
      <About bcg={"bg-primary-green-05"} />
      {loading ? (
        <div>loading...</div>
      ) : (
        <Cardwrpper sites={sites} title="プロジェクト" cat="projects" linked />
      )}
      <GridImages title={"グラフィック"} designs={designs} />
      {loading ? (
        <div>loading...</div>
      ) : (
        <Cardwrpper sites={sites} title="デモ" cat="demo" linked />
      )}
      {/* <About /> */}
    </main>
  );
}
