

export default function ResultList({results, solution}: {results: {name: string, count: number, distance: number}[], solution: number}) {
    return(
        <div className="flex flex-col border-2 border-solid border-white rounded-md p-2 w-[500px] mt-10 mb-10 overflow-auto gap-2 h-full">
            <div className="flex justify-between">
                <div>
                    <span className="mr-2">Platz</span>
                    <span>Name</span>
                </div>

                <span>{`Lösung: ${solution}`}</span>
                
                <div className="flex justify-between w-40">
                    <span>Schätzung</span>
                    <span>Abstand</span>
                </div>
                
            </div>
            {
                results.map((result, index) => (
                    <div className="flex justify-between" key={result.name}>
                        <div>
                            <span className="w-5 mr-2">{index+1}</span>
                            <span>{result.name.replaceAll("_", " ").replace(/\b\w/g, char => char.toUpperCase())}</span>
                        </div>
                        
                        <div className="flex justify-between w-30">
                            <span>{result.count}</span>
                            <span>{result.distance}</span>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}