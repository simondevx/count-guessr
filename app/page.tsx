'use client'

import { useState, useRef } from "react";
import { addEntry } from "@/app/lib/dbConnector";


export default function Home() {
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const vorname = String(formData.get("vorname")).toLowerCase().trim();
    const nachname = String(formData.get("nachname")).toLowerCase().trim();
    const count = String(formData.get("count")).trim();
    if (await addEntry(`${vorname}_${nachname}`, count)) {
      setMessage("")
      formRef.current?.reset();
    } else {
      setMessage("Der Name existiert bereits!")
    }
    
  };

  return (
    <div className="flex justify-center items-center overflow-y-auto scrollbar-none h-[100dvh]">
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col items-center justify-around w-[400px] h-[300px] border-white border-2 rounded-2xl">
        <div className="flex flex-col w-full items-center gap-2">
          <input type="text" name="vorname" id="vorname" placeholder="Vorname" className="input" required/>
          <input type="text" name="nachname" id="nachname" placeholder="Nachname" className="input" required/>
        </div>
        
        <input type="number" name="count" id="count" placeholder="Anzahl" className="input" required/>
        <span className={`${message === "" ? "hidden" : "block"}`}>{message}</span>
        <button className="btn w-[200px]">Fertig</button>
      </form>
    </div>
  );
}


