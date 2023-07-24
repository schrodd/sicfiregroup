export default function Replicate({n, children}: {n:number, children:React.ReactNode}){
  const arr = [...Array(n)]
  return <>{arr.map(() => children)}</>
}