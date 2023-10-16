import { Link, useLocation } from "react-router-dom";
import Logo from "../images/Logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true);

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
  return (
    <motion.div
      className="flex gap-2 text-white justify-around items-center border-b-[1px] border-gray-400 py-1"
      variants={navVariant}
      initial="initial"
      animate="animate"
    >
      <img className="h-[30px] min-h-[30px] max-h-[980px] max-w-[300px] sm:h-[98px] " width="1000" height="325" src={Logo} alt="Logo" />
      <nav>
        <ul className="flex text-[12px] sm:text-[16px] gap-2 sm:gap-4 font-bold items-center ">
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
