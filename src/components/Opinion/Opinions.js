import PatternOption from "./PatternOption";
import AnimationLabel from "./AnimationLabel";



function Opinions() {




  return (
    <div className="relative pb-[450px] md:pb-32 ">
      <div className="relative top-[1000px] flex gap-2 w-full">
        <div className="flex flex-col gap-4">
          <PatternOption
            className="max-w-[200px] relative opacity-0 md:opacity-100"
            title="Ultimate Typing Experience"
            description="Enhance the aesthetics of your workspace with our keyboard's sleek and stylish design. Its modern look complements any setup, making it as visually appealing as it is functional."
            person="Amelia Johnson"
          />
          <PatternOption
            className="max-w-[200px] relative opacity-0 md:opacity-100 top-[280px]"
            title="Elevate Your Productivity"
            description="Experience a productivity revolution with our advanced keyboard. Its ergonomic design, tactile feedback, and customizable features are designed to enhance your efficiency and make your workday a breeze. Say goodbye to typing fatigue and hello to enhanced productivity.  Elevate your workspace to a new level of sophistication."
            person="Ethan Anderson"
          />
        </div>
        <div className="flex flex-col gap-4">
          <PatternOption
            className="relative top-[200px] left-1/2 md:left-0 max-w-[200px] md:top-[-140px]   md:bottom-[170px]"
            title="Seamless Connectivity"
            description="Switch between your computer, tablet, and smartphone with ease, and experience a consistent and efficient typing experience no matter where you are. Stay connected and stay productive."
            person="Olivia Parker"
          />
          <PatternOption
            className="relative left-[120px] md:left-0 max-w-[200px] w-[300px] md:w-[200px]  top-[650px] md:top-[650px] lg:top-[300px]"
            title="Unmatched Comfort"
            description="Our keyboard is the perfect marriage of cutting-edge innovation and reliable functionality. It seamlessly integrates advanced technology to enhance your typing experience while offering the dependable performance you need. Rediscover the joy of typing with our keyboard."
            person="Liam Mitchell"
          />
        </div>
        <div className="flex flex-col gap-4 relative bottom-[200px]">
          <PatternOption
            className="relative w-[220px]  right-1/2 max-w-[300px] md:right-0  md:bottom-[100px]"
            title="Precision at Your Fingertips"
            description="Long typing sessions have never been this comfortable. Our keyboard's ergonomic design and soft-touch keys provide a typing experience like no other. Whether you're working late into the night or crafting a masterpiece, you'll appreciate the comfort and support our keyboard offers. Each keystroke is met with accuracy, ensuring that your words flow effortlessly onto the screen. "
            person="Sophia Carter"
          />
          <PatternOption
            className="relative right-[88px] md:right-0 max-w-[200px] top-[1150px] md:top-[850px] lg:top-[400px]"
            title="Experience Silent Typing"
            description="Experience typing like never before with our keyboard's precision-engineered keys. "
            person="Noah Evans"
          />
        </div>
        <div className="flex flex-col gap-4">
          <PatternOption
            className="max-w-[200px] relative left-[50px] opacity-0 md:opacity-100"
            title="Sleek and Stylish Design"
            description="Say goodbye to noisy distractions and hello to silent typing perfection. Our keyboard is engineered to provide a whisper-quiet typing experience, allowing you to focus on your work without disturbing those around you. Typing has never been this peaceful."
            person="Ava Turner"
          />
          <PatternOption
            className="max-w-[200px] relative opacity-0 md:opacity-100 top-[200px]"
            title="Innovation Functionality"
            description="Prepare to embark on the ultimate typing journey with our state-of-the-art keyboard. Designed to provide an unparalleled typing experience, it combines precision, comfort, and seamless connectivity to elevate your productivity to new heights. Whether you're a writer, gamer, or professional, this keyboard is your gateway to typing perfection."
            person="Lucas Wilson"
          />
        </div>
      </div>
      <AnimationLabel />
    </div>
  );
}

export default Opinions;
