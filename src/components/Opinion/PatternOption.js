import {BsFillStarFill} from 'react-icons/bs'

function PatternOption({title,description,person, className}) {
  return (
    <div className={`flex flex-col p-1 max-h-[700px] items-center bg-orangePrimary text-white rounded-lg ${className}`}>
        <div className='flex justify-center gap-2 my-2'>
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
        </div>
        <p className='text-center font-bold '>{title}</p>
        <p className='text-center text-[14px]'>{description}</p>
        <p className='font-bold my-4'>{person}</p>
    </div>
  )
}

export default PatternOption