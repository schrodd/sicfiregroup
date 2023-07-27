export default function NavLink({children, href}: {children:string, href: string}){
  return (
    <a href={href} className='group'>
      {children}
      <div className='group-hover:w-full border-b-2 border-orange-600 w-0 transition-all'/>
    </a>
  )
}