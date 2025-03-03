'use server'
import { getTopCounts } from "../lib/dbConnector"
import ResultList from "../ui/resultList"

type Entry = {
    name: string,
    count: number,
    distance: number,
}

export default async function Results() {
    const topCounts: Entry[] = await getTopCounts()
    
    return (
        <div className="flex justify-center h-[100dvh]">
            <ResultList results={topCounts}/>
        </div>
    )
}