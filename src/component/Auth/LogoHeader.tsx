"use client";
import Image from "next/image";
import React from "react";

interface LogoHeaderProps {
  align?: "left" | "right";
  className?: string;
}

const LogoHeader = ({ align = "left", className }: LogoHeaderProps) => {
  return (
    <div
      className={`flex items-center gap-2 p-6 md:px-12 ${
        align === "right" ? "justify-end" : "justify-start"
      } ${className}`}
    >
      <Image src="img/logo.svg" alt="logo" height={20} width={20} />
      <span className="text-xl font-semibold text-gray-800">Your Logo</span>
    </div>
  );
};

export default LogoHeader;
