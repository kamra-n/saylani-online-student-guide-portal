export default function Topbar({title}:{title: string}) {  
  return (
    <>
    <div className="h-[5vh] flex justify-center items-center my-3 text-3xl">
    <h1>{title}</h1>
  </div>
  <hr />
    </>
  )
}
