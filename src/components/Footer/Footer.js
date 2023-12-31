import Logo from "../../images/Logo.png";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full pt-[80px]  text-white bg-grayFooter">
      <div className=" lg:flex lg:justify-center lg:gap-20  ">
        <img className=" aspect-[3.08]  w-[280px] max-h-[100px]  max-w-[300px] m-4" width="1000" height="325" loading="lazy" src={Logo} alt="Logo" />
        <div className="flex flex-col gap-10 p-4 lg:flex-row lg:gap-[150px] lg:mx-10 lg:justify-center">
          <div>
            <p className="text-[25px] font-bold mb-4">Explore</p>
            <ul className="flex flex-col gap-4 text-[18px] text-stone-400">
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
              <li>Reviews</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex gap-8 text-[60px] lg:flex-col ">
            <BsInstagram className=" bg-instagram bg-white rounded-[20px] cursor-pointer hover:scale-110 " />
            <BsFacebook className=" bg-facebook rounded-[30px] cursor-pointer hover:scale-110" />
            <AiOutlineTwitter className="text-twitter bg-white rounded-[30px] cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t-[1px] text-stone-400 ">
        <p className="w-full p-4 text-center">2023 © CHROMEON | All Rights Reserved</p>
        <p className="w-full p-4 text-center">Designed by <a href="https://github.com/TomaszGrobelski" >Tomasz Grobelski</a> </p>
        
      </div>
    </div>
  );
}

export default Footer;
