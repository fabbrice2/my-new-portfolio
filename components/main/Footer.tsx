import React from "react";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Find me</div>
            <a href="https://github.com/fabbrice2" className="flex flex-row items-center my-[15px] cursor-pointer relative z-[50]">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a className="flex flex-row items-center my-[15px] cursor-pointer relative z-[50]">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
            <a href="https://www.linkedin.com/in/fabrice-amenouglo-210908248/" className="flex flex-row items-center my-[15px] cursor-pointer relative z-[50]">
              <FaLinkedinIn />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer relative z-[50]">
              <span className="text-[15px] ml-[6px]">06 61 87 50 92</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer relative z-[50]">
              <span className="text-[15px] ml-[6px]">y_amenouglo@hetic.eu</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer relative z-[50]">
              <span className="text-[15px] ml-[6px]">
                fabriceamenouglo@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Fabrice AMENOUGLO 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
