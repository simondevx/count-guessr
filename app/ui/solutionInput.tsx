'use client'
import { setSolution } from "@/app/lib/dbConnector";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SolutionInput({solution}: {solution: number}) {
    const router = useRouter()
    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const solution = Number(formData.get("solution"));
        await setSolution(solution);
        router.refresh()
        formRef.current?.reset()
    };
    

    return(
        <form ref={formRef} onSubmit={handleSubmit} className="flex items-center w-[500px] border-2 border-white border-solid h-16 rounded-sm p-2 gap-5 mt-5">
            <input type="number" name="solution" id="solution" className="input grow" placeholder={String(solution)} required/>
            <button className="btn">Update</button>
        </form>
    )
}