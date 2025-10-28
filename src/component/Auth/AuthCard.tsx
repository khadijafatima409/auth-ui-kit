"use client";
import React from "react";
import LogoHeader from "./LogoHeader";

interface AuthCardProps {
  children: React.ReactNode; // whatever goes inside (forms, etc.)
  logoAlign?: "left" | "right"; // control logo alignment if needed
  className?: string; // optional custom styles
}

const AuthCard = ({
  children,
  logoAlign = "left",
  className = "",
}: AuthCardProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-10 w-full">
      <div
        className={`w-full bg-white rounded-3xl shadow-2xl overflow-hidden py-3 md:py-9 px-14 ${className}`}
      >
        <LogoHeader align={logoAlign} />
        {children}
      </div>
    </div>
  );
};

export default AuthCard;
