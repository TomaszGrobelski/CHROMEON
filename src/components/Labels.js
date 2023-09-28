

function Labels({title}) {
  return (
    <div className="flex flex-col">
        <label htmlFor="">{title}</label>
        <input type="text" className="pl-2 rounded h-12 text-white bg-orangePrimary border-white border-[2px] outline-none focus:border-gray-200 focus:bg-orangeSecound max-w-[400px] " />
    </div>
  )
}

export default Labels