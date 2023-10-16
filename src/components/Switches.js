import TableSwitches from "./TableSwitches";
import AOS from "../hooks/AOS";


function Switches() {
  AOS();
  return (
    <div className=" flex flex-col mb-60 gap-10 justify-center text-white rounded-3xl">
      <div className="">
        <h2
          className="flex gap-3 text-[50px] sm:text-[60px] font-league-gothic font-bold "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          BEST <span className="text-orangePrimary">SWITCHES</span>
        </h2>
        <p
          className="mx-1 my-10 max-w-[600px] text-[22px] text-justify font-Lato  font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          The CHROMEON keyboard is designed to suit your dedicated typing style. No matter what you like, linear, clicky
          or something in between, we have three Gateron G Pro switch options for you:{" "}
          <span className="text-red-500">Red</span>, <span className="text-blue-500">Blue</span>,{" "}
          <span className=" text-amber-950">Brown</span>. With a lifespan of 60 million keystrokes, we want to make sure
          that every keystroke has the same effect.
        </p>
      </div>
      <TableSwitches  />
      
    </div>
  );
}

export default Switches;
