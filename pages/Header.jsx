import Link from "next/link";
import React from "react";
import Shape from "./assets/Shape.png";

const Header = () => {
  return (
    <div>
      <img
        src={Shape.src}
        alt="Gradient shape"
        className="absolute top-0 left-0 bottom-0"
      />
      <div className="flex justify-center items-center text-center bg-white drop-shadow-md gap-2 w-[25%] mx-auto border-0 rounded-full py-1 mt-8 sticky top-0 left-0">
        <Link href="#">
          <button className="headerButton">Home</button>
        </Link>
        <Link href="#projects">
          <button className="headerButton">Projects</button>
        </Link>
        <Link href="#contact">
          <button className="headerButton">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
