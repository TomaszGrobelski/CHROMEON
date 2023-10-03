import Labels from "./Labels";
import { useId } from "react";

function Contact() {
  const ID = useId();
  return (
    <div className="bg-gradient-45 font-mono flex flex-col items-center mx-20 rounded-[15px] text-white text-lg ">
      <h3 className="relative -top-28 text-[50px] sm:text-[80px] md:text-[95px] m-6 flex flex-col gap-10  tracking-[-2px] font-bold">
        <span className=" text-orangeDark p-6">Contact</span>
        <span className="space-x-5">THE TEAM</span>
      </h3>
      <p className="m-2 max-w-[520px] text-[20px] opacity-75 ">
        Feel free to reach out to us with any inquiries, partnership opportunities, or suggestions on how we can enhance
        our products!
      </p>
      <div className="m-6 w-full max-w-[900px]">
        <form id={`${ID}`} className="flex flex-col items-center gap-5">
          <div className="grid mt-10 gap-5 w-4/5 sm:grid-cols-2 ">
            <Labels id={`${ID}-name`} title="First name *" />
            <Labels title="Last name *" />
            <Labels title="Email *" />
            <Labels title="Phone number" />
          </div>
          <button className="rounded bg-white text-gray-800 text-2xl max-w-[150px] py-3 px-7 m-4 text-center font-sans">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
