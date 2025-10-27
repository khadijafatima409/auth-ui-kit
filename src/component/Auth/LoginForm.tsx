"use client";

import React, { useState } from "react";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import Image from "next/image";
import SocialButton from "./SocialButton";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4 w-full">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden  pt-5 pb-6 md:pb-12">
        <div className="flex items-center gap-2 mb-2 p-6 md:px-12 ">
          <Image src="img/logo.svg" alt="xlogo" height={16} width={12} />
          <span className="text-xl font-semibold text-gray-800">Your Logo</span>
        </div>
        <div className="flex pr-2 md:pr-10 ">
          <div className="w-full lg:w-1/2 p-6 md:p-12 ">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
              <p className="text-gray-600 text-sm">
                Login to access your travelwise account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <CustomInput
                label="Email/Username"
                type="email"
                placeholder="Enter your email"
                value={email}
                required
              />

              <CustomInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                required
                showPasswordToggle
              />

              <div className="flex items-center justify-between text-xs md:text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-coral-pink font-medium">
                  Forgot Password
                </a>
              </div>

              <CustomButton type="submit" variant="primary" fullWidth>
                Login
              </CustomButton>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-coral-pink font-medium">
                Sign up
              </a>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">
                    Or login with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {SOCIAL_PROVIDERS.map((provider) => (
                  <SocialButton
                    key={provider.name}
                    provider={provider.name}
                    icon={provider.icon}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-1/2 rounded-3xl items-center justify-center relative">
            <Image
              src="img/login.svg"
              alt="apple"
              height={316}
              width={459}
              className=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const SOCIAL_PROVIDERS = [
  { name: "facebook", icon: "img/icons/facebook.svg" },
  { name: "google", icon: "img/icons/google.svg" },
  { name: "apple", icon: "img/icons/apple.svg" },
];
