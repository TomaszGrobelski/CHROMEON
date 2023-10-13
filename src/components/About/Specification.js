
import BluetoothC from '../../images/BluetoothC.png'
import AOS from "../../hooks/AOS";

function Specification() {
  AOS();

  return (
    <div className="flex justify-center font-league-gothic font-bold pt-40 mx-4 p-5 rounded-br-2xl rounded-bl-2xl">
      <div className="flex flex-col items-center xl:flex-row-reverse">
        <div className="flex flex-col items-center xl:w-1/2">
          <h2
            className="text-[50px] text-white  sm:text-[65px] md:text-[62px] flex gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span class="text-orangePrimary">Wireless </span>AND <span class="text-orangeSecound">wired </span>{" "}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            class="sm:m-4 mt-12 text-[18px] sm:text-[30px] max-w-[700px] text-start xl:text-start font-Montserrat text-white tracking-[1px] opacity-90 aos-init aos-animate"
          >
            The latest Bluetooth technology provides a more stable connection, saving energy and reducing latency. All
            new Keychron keyboards use Bluetooth 5.1 to ensure stable and smooth everyday use.
          </p>
        </div>
        <div className="flex flex-col items-center xl:w-1/2 xl:gap-10">
          <img
            className=" object-contain rounded-md mt-9 aspect-auto shadow-lg shadow-purple-600 xl:w-3/4 max-w-[500px] "
            src={BluetoothC}
            alt="Bluetooth-typC"
            data-aos="zoom-in-up"
            data-aos-duration="600"
          />
        </div>
      </div>
    </div>
  );
}

export default Specification;
