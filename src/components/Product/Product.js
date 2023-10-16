import Button from "../Button"
import { AiOutlineDoubleRight } from "react-icons/ai";
import AOS from "../../hooks/AOS";


function Product({photo, title, description, price}) {
  AOS()
  const iconRight= <AiOutlineDoubleRight /> ;

  return (
    <div 
    className="text-white border-[5px] lg:max-h-[600px] rounded-3xl flex flex-col items-center"
    data-aos="fade-left"
    data-aos-duration="1000"
    >
        <img className=" object-contain max-w-[100%] -m-2 rounded-tl-3xl rounded-tr-3xl inline-block" loading="lazy" src={photo} alt="Product" />
        <h3 className="text-white text-[22px] font-bold mt-6 ">{title}</h3>
        <p className="text-[16px] p-10 lg:max-w-[270px] max-h-[200px] text-gray-400 lg:p-2 my-2 overflow-hidden ">{description}</p>
        <span className="text-[24px] mt-3 text-orangeDark">${price}.00</span>
        <Button additionalClasses="gap-2 hover:text-white" title="Check!" icon={iconRight} />

    </div>
  )
}

export default Product