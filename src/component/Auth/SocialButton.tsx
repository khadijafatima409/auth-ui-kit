"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface SocialButtonProps {
  provider: string;
  icon: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  icon,
  onClick,
}) => {
  return (
    <CustomButton
      type="button"
      variant="outline"
      onClick={onClick}
      fullWidth
      className="flex items-center justify-center px-4 py-3"
    >
      <Image src={icon} alt={provider} height={16} width={16} />
    </CustomButton>
  );
};

export default SocialButton;
