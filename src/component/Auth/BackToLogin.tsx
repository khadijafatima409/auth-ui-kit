"use client";
import Image from "next/image";
import Link from "next/link";

interface BackToLoginProps {
  href?: string;
  text?: string;
}

const BackToLogin = ({
  href = "/login",
  text = "Back to login",
}: BackToLoginProps) => {
  return (
    <Link href={href} className="flex gap-2 text-lg items-center">
      <Image
        src="/img/icons/left-arrow.svg"
        alt="Back arrow"
        height={10}
        width={10}
      />
      <span>{text}</span>
    </Link>
  );
};

export default BackToLogin;
