import TableSwitches from "./TableSwitches";

function Switches() {
  return (
    <div className=" flex flex-col lg:flex-row items-center justify-center p-6 bg-white rounded-3xl">
      <div className="p-4">
        <h2 className="text-[50px] sm:text-[65px] md:text-[75px] font-bold text-center">BEST SWITCHES</h2>
        <p className="mx-1 sm:mx-4 my-10 max-w-[600px] text-[22px] font-Lato text-gray-800 font-semibold">
          The CHROMEON keyboard is designed to suit your dedicated typing style. No matter what you like, linear, clicky
          or something in between, we have three Gateron G Pro switch options for you:{" "}
          <span className="text-red-500">Red</span>, <span className="text-blue-500">Blue</span>,{" "}
          <span className=" text-amber-950">Brown</span>. With a lifespan of 60 million keystrokes, we want to make sure
          that every keystroke has the same effect.
        </p>
      </div>
      <TableSwitches />
    </div>
  );
}

export default Switches;
