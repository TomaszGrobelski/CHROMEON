import {BsArrowRight} from "react-icons/bs";
import Bluetooth from '../images/BluetoothIcon.png'
import BluetoothC from '../images/BluetoothC.png'
function Specification() {
  return (
    <div className="flex font-league-gothic font-bold pt-40 mx-4 p-5 bg-orangePrimary bg-gradient-135 justify-between rounded-br-2xl rounded-bl-2xl">
      <div className="flex flex-col items-center">
        <h2 className="text-[60px] sm:text-[65px] md:text-[70px] flex ">Wireless and wired <img className=" hidden md:block " src={Bluetooth} alt="Blootooth" /></h2>
        <p className="m-4 mt-12 text-[30px] text-gray-800 tracking-[2px] opacity-75">The latest Bluetooth technology provides a more stable connection, saving energy and reducing latency. All new Keychron keyboards use Bluetooth 5.1 to ensure stable and smooth everyday use.</p>
        <img className=" object-contain rounded-md mt-9 aspect-auto w-3/4 max-w-[500px] " src={BluetoothC} alt="Bluetooth-typC" />
        <button className="flex items-center text-white tracking-[2px] gap-1 px-1 sm:px-4 py-2 my-10 border-[2px] border-blue-500 rounded-2xl text-[35px] sm:text-[50px] hover:text-purple-500 hover:bg-white transition-all duration-300">Check more <BsArrowRight className="text-blue-500" /></button>
      </div>
    </div>
  );
}

export default Specification;
