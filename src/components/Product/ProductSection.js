import Product from "./Product";
import custom from "../../images/Products/Custom.png";
import LowProfil from "../../images/Products/LowProfil.png";
import HighProfil from "../../images/Products/HighProfil.png";
import CircleBlur from "../CircleBlur";
import Switches from "../Switches";
import Advantages from "./Advantages";
import AOS from "../../hooks/AOS";

function ProductSection() {
  AOS();
  const products = [
    {
      title: "Custom Keyboards",
      description:
        "Custom keyboards are personalized input devices tailored to meet the specific preferences and needs of individual users. These keyboards are highly customizable in terms of key layout, key switches, keycaps, and even aesthetic design. Custom keyboards cater to enthusiasts and professionals who seek a unique typing experience or require specialized features for tasks such as gaming or programming. They allow users to choose from a wide range of components to create a keyboard that suits their ergonomic requirements and style preferences.",
      price: 229,
    },
    {
      title: "High-Profile Keyboards",
      description:
        "High-profile keyboards are characterized by their taller keycaps and a larger distance between the keys and the keyboard's base. This design offers a more prominent and tactile typing experience. High-profile key switches often have a deeper keypress feel, making them popular among typists who prefer a substantial keystroke feedback. These keyboards are commonly used by individuals who engage in extended typing sessions, such as writers and programmers, as they can reduce fatigue and provide a satisfying typing experience.",
      price: 186,
    },
    {
      title: "Low-Profile Keyboards",
      description:
        "Low-profile keyboards are designed with a sleek and compact form factor. They feature shorter keycaps and a reduced distance between the keys and the keyboard's base, resulting in a flatter appearance. Low-profile key switches are known for their shallower keypress and quieter operation. These keyboards are often favored by users seeking a minimalist and space-saving design, such as those with limited desk space or users on the go. Low-profile keyboards are also popular in portable devices like laptops and tablets, contributing to their slim and lightweight profile.",
      price: 199,
    },
  ];
  return (
    <div>
      <div className="relative mt-80 ">
        <CircleBlur additionalClasses=" absolute -top-16 -right-40 lg:top-14 lg:right-0 bg-orange-500 " />
        <h2
          className="flex flex-col text-white font-league-gothic text-[50px] md:text-[65px] lg:text-[72px] items-center justify-center font-bold mb-20"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="text-center">CHOOSE THE BEST SOLUTION</span>{" "}
          <span className="text-center text-orangeSecound">FROM CHROMEON</span>{""}
        </h2>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-4 ">
          <Product
            photo={custom}
            title={products[0].title}
            description={products[0].description}
            price={products[0].price}
          />
          <Product
            photo={HighProfil}
            title={products[1].title}
            description={products[1].description}
            price={products[1].price}
          />
          <Product
            photo={LowProfil}
            title={products[2].title}
            description={products[2].description}
            price={products[2].price}
          />
        </div>
      </div>
      <div>
        <div className="mt-80">
          <Switches />
        </div>
      </div>
      <Advantages />
    </div>
  );
}

export default ProductSection;
