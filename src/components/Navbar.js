import Logo from "../images/Logo.png"
function Navbar() {
  return (
    <div className="flex text-white justify-around items-center border-b-[1px] border-gray-400 py-1">
      <img className="h-[100px]" src={Logo} alt="Logo" />
      <nav>
        <ul className="flex gap-4 font-bold items-center ">
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>
            <button className="bg-gradient-45 rounded-lg p-3 text-lg">Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
