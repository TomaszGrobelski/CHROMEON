import klawiatura from "../../images/klawiatura.png";
import sideLeft from "../../images/sideLeft.png";
import Button from "../Button";
import { FaAnglesDown } from "react-icons/fa6";

import { Element } from "react-scroll";
import { useEffect, useState } from "react";

function HeroPage() {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Oblicz różnicę w przewijaniu
      const scrollDifference = currentScrollY - lastScrollY;

      // Przesuń element w górę lub w dół w zależności od kierunku przewijania
      const translateY = -scrollY + scrollDifference * 1;

      setLastScrollY(currentScrollY);

      // Ustaw transformację elementu
      const element = document.querySelector(".keyboard-left");
      if (element) {
        element.style.transform = `translateY(${translateY / 3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, scrollY]);

  // Perspective keyboard

  useEffect(() => {
    const rotatingImage = document.getElementById("rotating-image");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { top, left, width, height } = rotatingImage.getBoundingClientRect();

      // Oblicz kąt obrotu w stopniach na podstawie pozycji kursora
      const angleX = ((clientY - (top + height / 2)) / height) * 12;
      const angleY = ((clientX - (left + width / 2)) / width) * 12;

      // Ustaw transformację CSS
      rotatingImage.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    };

    const handleMouseLeave = () => {
      // Zresetuj transformację po opuszczeniu obrazu
      rotatingImage.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    if (rotatingImage) {
      rotatingImage.addEventListener("mousemove", handleMouseMove);
      rotatingImage.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      // Usuń nasłuchiwanie zdarzeń przy odmontowywaniu komponentu
      if (rotatingImage) {
        rotatingImage.removeEventListener("mousemove", handleMouseMove);
        rotatingImage.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  // const ref= useRef(null)
  // const handleScroll = ()=>{
  //   ref.current?.scrollIntoView({behavior: 'smooth'})
  // }

  return (
    <header className="relative text-white mt-12 flex flex-col items-center ">
      <h1 className="relative flex flex-col gap-3 tracking-[-4px] text-center font-bold text-8xl max-w-[700px]">
        <span>
          TIME TO TAKE <span className="text-orangePrimary">CONTROL</span>{" "}
        </span>
        <span>OF YOUR KEYBOARD</span>
        <Element name="image">
          <img
            className="keyboard-left transform duration-75 ease-in-out absolute max-w-[200px] h-[300px] left-[-120px] top-[280px] rounded-lg opacity-40 shadow-md shadow-white "
            src={sideLeft}
            alt="keyboard-left"
          />
        </Element>
      </h1>
      <p className="max-w-[550px] text-center m-4 text-gray-400">
        Are you ready to elevate your <span className="font-bold text-white ">keyboard skills</span> and kickstart your
        journey to success? It's time to take action and steer your career towards success!
      </p>
      <Button title="Buy Now" />
      <figure id="rotating-image" className="perspective-[1500px]">
        <img
          className="transition duration-75"
          // transition duration-300 rounded-md rotate-x-12 rotate-y-12 hover:rotate-x-0 hover:rotate-y-0
          //id="rotating-image"
          src={klawiatura}
          alt="keyboard"
        />
      </figure>
      <button className="mt-20 mb-40">
        <FaAnglesDown className="relative top-5 animate-bounce text-white text-[100px]" />
      </button>
    </header>
  );
}

export default HeroPage;
