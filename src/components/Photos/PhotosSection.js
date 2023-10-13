import React from "react";
import HorizontalWrapper from "./HorizontalWrapper";
import Photos from "./Photos";
import key1 from "../../images/Photos/key1.png";
import key2 from "../../images/Photos/key2.png";
import key3 from "../../images/Photos/key3.png";
import key4 from "../../images/Photos/key4.png";
import key5 from "../../images/Photos/key5.png";
import key6 from "../../images/Photos/key6.png";
import key7 from "../../images/Photos/key7.png";
import key8 from "../../images/Photos/key8.png";

function PhotosSection() {
  const cards = [
    { image: key1 },
    { image: key2 },
    { image: key3 },
    { image: key4 },
    { image: key5 },
    { image: key6 },
    { image: key7 },
    { image: key8 },
    ];

  return (
    <section className="relative bg-black h-[600px] flex justify-end items-start mt-40">
      <HorizontalWrapper height="600px" direction={-2500}>
        {cards.map((card, index) => {
          return <Photos key={index} image={card.image} />;
        })}
      </HorizontalWrapper>
    </section>
  );
}

export default PhotosSection;
