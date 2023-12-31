import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  stack: string;
}

const ProjectCard = ({ src, title, description, stack }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] z-50">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain cursor-pointer"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white cursor-pointer">{title}</h1>
        <p className="mt-2 text-gray-300">{description} <br/><br/> {stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
