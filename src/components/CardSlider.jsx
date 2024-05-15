import Image from "next/image";

import cardSlider from "../../public/card-slider.png";

export default function CardSlider(props) {
  return (
    <div className="background-slide h-[900px] flex flex-col justify-center items-center">
      <h2>{props.title}</h2>
      <p>
      {props.text}
      </p>
    </div>
  );
}
