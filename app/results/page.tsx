'use server'
import { getTopCounts, getSolution } from "@/app/lib/dbConnector"
import ResultList from "@/app/ui/resultList"
import SolutionInput from "@/app/ui/solutionInput"

type Entry = {
    name: string,
    count: number,
    distance: number,
}

export default async function Results() {
    const topCounts: Entry[] = await getTopCounts()
    const solution: number = await getSolution()
    console.log(topCounts)
    
    return (
        <div className="flex flex-col items-center h-[100dvh] justify-center">
            <SolutionInput solution={solution}/>
            <ResultList results={topCounts} solution={solution}/>
        </div>
    )
}