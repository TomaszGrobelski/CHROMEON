import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";


function Navbar() {
  return (
    <div className="flex text-white justify-around items-center border-b-[1px] border-gray-400 py-1">
      <img className="h-[50px] sm:h-[100px]" src={Logo} alt="Logo" />
      <nav>
        <ul className="flex gap-4 font-bold items-center ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About</li>
          <li>Products</li>
          <li>
            <Link to="/contact">
              <button className="bg-gradient-45 rounded-lg p-3 text-lg">Contact</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
