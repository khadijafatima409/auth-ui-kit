"use client";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  className?: string;
}

const AuthHeader = ({ title, subtitle, className }: AuthHeaderProps) => {
  return (
    <div className={`flex flex-col gap-2 text-dark-gray ${className || ""}`}>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-sm">{subtitle}</p>
    </div>
  );
};

export default AuthHeader;
