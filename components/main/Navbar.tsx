"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";


const Navbar = () => {

  
  const [selectedItem, setSelectedItem] = useState('About me');

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[999] px-5 sm:px-10 md:px-15 lg:px-20  ">
      <div className="w-full h-full flex flex-row items-center justify-between">
        <a href="#about-me" className="flex flex-row items-center">
          <Image
            src="/Obsidian.svg"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin h-[30px] w-[30px]"
          />

          <span className="font-bold hidden lg:block text-gray-300">
            Fabrice
          </span>
        </a>

        <div className="w-[500px] h-full hidden md:flex flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.href} key={social.name} className="cursor-pointer">
              <Image
                src={social.src}
                alt={social.name}
                width="24"
                height="24"
              />
            </a>
          ))}
        </div>
        <div className="flex md:hidden">
          <ul className="flex gap-4">
          <a href="#about-me"><li
              onClick={() => handleItemClick("About me")}
              className={
                selectedItem === "About me"
                  ? "text-white cursor-pointer transition-colors"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer transition-colors"
              }
            >
              About me
            </li></a>
            <a href="#skills"><li
              onClick={() => handleItemClick("Skills")}
              className={
                selectedItem === "Skills"
                  ? "text-white cursor-pointer transition-colors"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer transition-colors"
              }
            >
              Skills
            </li></a>
            <a href="#projects"><li
              onClick={() => handleItemClick("Projets")}
              className={
                selectedItem === "Projets"
                  ? "text-white cursor-pointer transition-colors"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer transition-colors"
              }
            >
              Projets
            </li></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
