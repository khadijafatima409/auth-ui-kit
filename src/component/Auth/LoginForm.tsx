"use client";

import React, { useState } from "react";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import Image from "next/image";
import SocialButton from "./SocialButton";
import { SOCIAL_PROVIDERS } from "@/data/social";
import AuthCard from "./AuthCard";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Login submitted:", { email, password });
  // };

  return (
    <AuthCard logoAlign="left">
      <div className="flex pr-2 md:pr-10 ">
        <div className="w-full lg:w-1/2 p-6 md:p-12 ">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
            <p className="text-gray-600 text-sm">
              Login to access your travelwise account
            </p>
          </div>

          <form className="space-y-5">
            <CustomInput
              label="Email"
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
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a
                href="/forgot-password"
                className="text-coral-pink font-medium"
              >
                Forgot Password
              </a>
            </div>

            <CustomButton type="submit" variant="primary" fullWidth>
              Login
            </CustomButton>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-coral-pink font-medium">
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
          <Image src="img/login.svg" alt="apple" height={316} width={459} />
        </div>
      </div>
    </AuthCard>
  );
}
