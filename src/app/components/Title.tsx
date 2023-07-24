export default function Title({children}: {children:string}){
  return (
    <div className="flexcol">
        <h2 className="z-10">{children}</h2>
        <div className="border-b-8 border-orange-600 w-full -mt-3"></div>
      </div>
  )
}