import BluetoothC from '../../images/BluetoothC.png'


function Specification() {


  return (
    <div className="flex justify-center font-league-gothic font-bold pt-40 mx-4 p-5 rounded-br-2xl rounded-bl-2xl">
      <div className="flex flex-col items-center xl:flex-row-reverse">
        <div className="flex flex-col items-center xl:w-1/2">
          <h2
            className="text-[50px] text-white  sm:text-[65px] md:text-[62px] flex gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="text-orangePrimary">Wireless </span>AND <span className="text-orangeSecound">wired </span>{" "}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className=" mt-12 text-justify text-[16px] sm:m-4 sm:text-[30px] max-w-[700px] xl:text-start font-Montserrat text-white tracking-[1px] opacity-90 "
          >
            The latest Bluetooth technology provides a more stable connection, saving energy and reducing latency. All
            new Keychron keyboards use Bluetooth 5.1 to ensure stable and smooth everyday use.
          </p>
        </div>
        <div className="flex flex-col items-center xl:w-1/2 xl:gap-10">
          <img
            className=" w-[300px]  sm:w-auto object-contain rounded-md mt-9 aspect-auto shadow-lg shadow-purple-600 xl:w-3/4 max-w-[500px] "
            src={BluetoothC}
            loading='lazy'
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
