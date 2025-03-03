'use client'

import Image from "next/image";
import { useState } from "react";
import { addEntry } from "@/app/lib/dbConnector";


export default function Home() {
  const [message, setMessage] = useState<string>("")
  const handleSubmit = async (formData: FormData) => {
    const name = String(formData.get("name"));
    const count = String(formData.get("count"));
    addEntry(name, count);
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto scrollbar-none h-[100dvh]">
      <form action={handleSubmit} className="flex flex-col items-center justify-around w-[400px] h-[300px] border-white border-2 rounded-2xl">
        <input type="text" name="name" id="name" placeholder="Name" className="input" required/>
        <input type="number" name="count" id="count" placeholder="Anzahl" className="input" required/>
        <span className={`${message === "" ? "hidden" : "block"}`}>{message}</span>
        <button className="btn w-[200px]">Fertig</button>
      </form>
    </div>
  );
}


