import {BsArrowRight} from "react-icons/bs";
import Bluetooth from '../images/BluetoothIcon.png'
import BluetoothC from '../images/BluetoothC.png'
function Specification() {
  return (
    <div className="flex font-league-gothic font-bold mx-4 p-5 bg-orangePrimary justify-between rounded-br-2xl rounded-bl-2xl">
      <img className=" object-cover rounded-3xl mt-9 " src={BluetoothC} alt="Bluetooth-typC" />
      <div className="w-1/2">
        <h2 className="text-[90px] relative">Wireless and wired <img className="absolute right-10 top-2" src={Bluetooth} alt="Blootooth" /></h2>
        <p className="m-4 mt-12 text-[30px] text-gray-800 tracking-[2px] opacity-75">The latest Bluetooth technology provides a more stable connection, saving energy and reducing latency. All new Keychron keyboards use Bluetooth 5.1 to ensure stable and smooth everyday use.</p>
        <button className="flex items-center text-white tracking-[2px] gap-1 px-4 py-2 border-[2px] border-blue-500 rounded-2xl text-[50px] hover:text-black hover:bg-white transition-all duration-150">Check more <BsArrowRight className="text-blue-500" /></button>
      </div>
    </div>
  );
}

export default Specification;
