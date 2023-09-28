import TableSwitches from "./TableSwitches";

function Switches() {

  return (
    <div className=" flex flex-col items-center justify-center p-6 bg-white rounded-3xl">
      <h2 className="text-[90px] font-bold text-center">BEST SWITCHES</h2>
      <p className="mx-4 my-10 max-w-[800px] text-[22px] font-Lato text-gray-700 font-semibold">
        The CHROMEON keyboard is designed to suit your dedicated typing style. No matter what you like, linear, clicky
        or something in between, we have three Gateron G Pro switch options for you:{" "}
        <span className="text-red-500">Red</span>, <span className="text-blue-500">Blue</span>,{" "}
        <span className=" text-amber-950">Brown</span>. With a lifespan of 60 million keystrokes, we want to make sure
        that every keystroke has the same effect.
      </p>
      <TableSwitches />
    </div>
  );
}

export default Switches;
