import { Link, useLocation } from "react-router-dom";
import Logo from "../images/Logo.png";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(true)

  useEffect(() => {
    if (location.pathname === "/") {
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
      className="flex text-white justify-around items-center border-b-[1px] border-gray-400 py-1"
      variants={navVariant}
      initial="initial"
      animate="animate"
    >
      <img className="h-[50px] sm:h-[100px]" src={Logo} alt="Logo" />
      <nav>
        <ul className="flex gap-4 font-bold items-center ">
          <Link to="/">
            <li>Home</li>
          </Link>
          {isHome ? (
            <>
              <li>
                <button onClick={AboutClick}>About</button>
              </li>
              <li>
                <button onClick={ProductsClick}>Products</button>
              </li>
            </>
          ) : null}
          <li>
            <Link to="/contact">
              <button className="bg-gradient-45 rounded-lg p-3 text-lg">Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}

export default Navbar;
