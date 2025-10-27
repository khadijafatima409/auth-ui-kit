import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface CustomInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  required?: boolean;
  className?: string;
  showPasswordToggle?: boolean;
}

export default function CustomInput({
  label,
  type = "text",
  placeholder,
  value,
  required = false,
  className = "",
  showPasswordToggle = false,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle && showPassword ? "text" : type;

  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-medium  mb-2">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          required={required}
          className="w-full px-2 py-1.5 md:px-4 md:py-3 border border-gray-300 rounded-xs outline-none"
        />
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
