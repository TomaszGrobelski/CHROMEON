import Button from "./Button"
import { AiOutlineDoubleRight } from "react-icons/ai";


function Product({photo, title, description, price}) {
  const iconRight= <AiOutlineDoubleRight /> ;
  return (
    <div className="text-white border-[5px]  rounded-3xl flex flex-col items-center">
        <img className=" object-contain w-[100%] -m-2 rounded-tl-3xl rounded-tr-3xl max-w-full inline-block" src={photo} alt="Product" />
        <h3 className="text-white text-[18px] font-bold mt-6 ">{title}</h3>
        <p className="text-[16px] text-gray-400">{description}</p>
        <span className="text-[24px] mt-3">${price}.00</span>
        <Button additionalClasses="gap-2 hover:text-white" title="Check!" icon={iconRight} />
        
    </div>
  )
}

export default Product