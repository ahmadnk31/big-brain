export function Skeleton() {
    return(
        <>
          {
            Array.from({length:5}).map((_,index)=>(
                <div key={index} className="bg-slate-200 p-4 w-full rounded-lg animate-pulse">
                    <div className="bg-slate-300 min-w-3/4 h-10 rounded-lg mb-2"></div>
                    <div>
                    <div className="bg-slate-300 h-40 rounded-lg"></div>
                    <div className="bg-slate-300 h-4 w-3/4 mt-4 rounded-lg"></div>
                    </div>
                </div>
            ))
          }
        </>
    )
}