"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CustomInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  showPasswordToggle?: boolean;
}

export default function CustomInput({
  label,
  type = "text",
  placeholder,
  required = false,
  className = "",
  showPasswordToggle = false,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle && showPassword ? "text" : type;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="px-4 py-2 border-2 border-old-lavender rounded relative">
          <label className="absolute -my-5 -mx-2 bg-white px-2 text-charcol text-sm">
            {label}
          </label>
          <input
            type={inputType}
            className="appearance-none placeholder:text-sm text-sm rounded w-full py-1 text-charcol leading-tight focus:outline-none focus:bg-white focus:border-white"
            placeholder={placeholder}
            required={required}
          />
        </div>
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 "
          >
            {showPassword ? (
              <EyeOff size={20} className="cursor-pointer" />
            ) : (
              <Eye size={20} className="cursor-pointer" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
