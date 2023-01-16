import React from "react";
import Bank from "./assets/Bank.svg";
import HooBank1 from "./assets/HooBank1.jpg";
import HooBank2 from "./assets/HooBank2.jpg";

const Projects = () => {
  return (
    <div>
      <div className="max-w-[768px] mx-auto">
        <h1 className="text-[48px] text-[#001737] font-bold">Projects.</h1>
        <div className="mt-8 text-[24px] text-[#001737] font-semibold">
          <p className="flex flex-row gap-4">
            <img
              src={Bank.src}
              alt="Bank image"
              className="h-[30px] w-[30px]"
            />
            HooBank
          </p>
        </div>
        <p className="mt-4 text-[18px] text-[#001737] font-normal leading-[1.7em]">
          I developed the Frontend for a bank that features a user-friendly
          design and showcases the bank's payment methods, active users, trusted
          companies, and total transactions. The website also highlights the
          benefits of using the bank's credit cards such as rewards, security,
          and balance transfer options. Additionally, it includes a feature for
          easily managing billing and invoicing, and a section displaying
          customer testimonials ✌️
        </p>
        <div className="mt-4 flex flex-row space-x-2 items-center justify-start hover:translate-x-1 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-[15px] h-[15px] fill-[#001737]/75 hover:fill-[#001737]"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
          <a
            className="text-[#001737]/75 hover:text-[#001737] font-[500] text-[16px]"
            href="https://nextjs-hoobank.vercel.app/"
          >
            HooBank Website
          </a>
        </div>
        <div className="mt-8 flex flex-row items-center justify-center gap-8">
          <img
            src={HooBank2.src}
            alt="Bank image"
            className="w-[40%] rounded-[20px]"
          />
          <img
            src={HooBank1.src}
            alt="Bank image"
            className="w-[40%] rounded-[20px]"
          />
        </div>
      </div>
      <div className="my-32 mx-auto bg-zinc-300/30 w-[4px] h-[65px] rounded-[100px]" />
    </div>
  );
};

export default Projects;
