import ErrorIcon from '@mui/icons-material/Error';

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-t from-slate-300 to-slate-100 ">
      <div className="cont flexcol">
        <ErrorIcon className='w-16 h-16'/>
        <p className='text-sm mt-1'>sicfiregroup.com</p>
        <h1 className="text-xl font-medium">Sitio web en construcción</h1>
      </div>
    </div>
  )
}