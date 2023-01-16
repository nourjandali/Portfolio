import React from "react";
import Coffee from "./assets/Coffee.png";

const Contact = () => {
  return (
    <div className="max-w-[768px] mx-auto mb-32">
      <div className=" bg-[#001737]/[0.03] rounded-[20px] py-12 px-12 flex flex-col justify-start items-start">
        <h1 className="text-[24px] text-[#001737] font-bold tracking leading-none">
          ✌️ Let's work together.
        </h1>
        <p className="mt-6">
          I have been in the design industry for over 10 years, specialising in
          UX design and product development. I'm currently available for design,
          no-code and fun side projects.
        </p>
        <button className="mt-6 bg-[#001737] text-white px-[16px] py-[10px] rounded-[6px] flex justify-center items-center gap-2 hover:bg-[#001737]/75">
          Contact Me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-[15px] h-[15px] fill-white hover:white/75"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Contact;
