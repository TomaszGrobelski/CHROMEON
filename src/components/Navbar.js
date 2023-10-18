import { Link, useLocation } from "react-router-dom";
import Logo from "../images/Logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === "/CHROMEON/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  const navVariant = {
    initial: {
      y: -100,
    },
    animate: {
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
      },
    },
  };

  const AboutClick = () => {
    window.scroll({
      top: 3660,
      behavior: "smooth",
    });
  };

  const ProductsClick = () => {
    window.scroll({
      top: 5950,
      behavior: "smooth",
    });
  };

  const navClick = () => {
    setVisible(!visible);
  };

  return (
    <motion.div
      className="flex gap-2 text-white justify-around items-center border-b-[1px] border-gray-400 py-1"
      variants={navVariant}
      initial="initial"
      animate="animate"
    >
      <img
        className="aspect-[3.08] h-[98px] min-h-[50px] max-w-[300px] sm:h-[98px] "
        width="1000"
        height="325"
        src={Logo}
        alt="Logo"
      />
      <nav className="">
        <button onClick={navClick} className="sm:hidden">
          <GiHamburgerMenu size={30} />
        </button>
        {visible ? (
          <div>
          <div onClick={navClick} className="fixed inset-0 bg-gray-300 opacity-80 z-40 sm:hidden"></div>
            <div className="fixed flex flex-col z-50 items-center top-0 right-0 w-[30%] bg-white h-screen sm:hidden">
              <button onClick={navClick} className="absolute right-3 top-3 ">
                <AiOutlineClose className=" text-black " size={22} />
              </button>
              <ul className="text-black flex flex-col gap-6 mt-14  sm:flex text-[14px] sm:text-white sm:text-[16px] sm:gap-4 font-bold items-center ">
                <li>
                  <Link onClick={navClick} to="/CHROMEON/" aria-label="Change page to Home Page">
                    HOME
                  </Link>
                </li>
                {isHome && (
                  <>
                    <li>
                      <button onClick={AboutClick} aria-label="Scroll to section About">
                        ABOUT
                      </button>
                    </li>
                    <li>
                      <button onClick={ProductsClick} aria-label="Scroll to section Product">
                        PRODUCT
                      </button>
                    </li>
                  </>
                )}
                <li>
                  <Link to="/contact/" aria-label="Change page on contact Page">
                    <button onClick={navClick} className="bg-gradient-45 rounded-lg p-1 sm:p-3  sm:text-lg">
                      Contact
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
        <ul className=" hidden sm:flex text-[12px] sm:text-[16px] gap-2 sm:gap-4 font-bold items-center ">
          <li>
            <Link to="/CHROMEON/" aria-label="Change page to Home Page">
              HOME
            </Link>
          </li>
          {isHome ? (
            <>
              <li>
                <button onClick={AboutClick} aria-label="Scroll to section About">
                  ABOUT
                </button>
              </li>
              <li>
                <button onClick={ProductsClick} aria-label="Scroll to section Product">
                  PRODUCT
                </button>
              </li>
            </>
          ) : null}
          <li>
            <Link to="/contact/" aria-label="Change page on contact Page">
              <button className="bg-gradient-45 rounded-lg p-1 sm:p-3  sm:text-lg">Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

export default Navbar;
