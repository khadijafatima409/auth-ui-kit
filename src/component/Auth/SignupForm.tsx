"use client";
import Image from "next/image";
import React from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import SocialButton from "./SocialButton";
import { SOCIAL_PROVIDERS } from "@/data/social";
import AuthCard from "./AuthCard";
import AuthDivider from "./AuthDivder";

const SignupForm = () => {
  return (
    <AuthCard logoAlign="right">
      <div className="flex gap-12 ">
        <div className="hidden lg:flex lg:w-1/2 rounded-3xl items-center justify-center relative">
          <Image src={"img/signup.svg"} alt="signup" height={233} width={439} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 pt-8 text-dark-gray">
            <h1 className="text-3xl font-semibold  mb-2">Sign up</h1>
            <p className=" text-sm">
              Let’s get you all st up so you can access your personal account.
            </p>
          </div>

          <form className="">
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex gap-2 justify-between pb-5">
                  <CustomInput
                    label="First Name"
                    type="text"
                    placeholder="john.doe@gmail.com"
                  />
                  <CustomInput
                    label="Last Name"
                    type="text"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="flex gap-2 justify-between pb-5">
                  <CustomInput
                    label="Email"
                    type="email"
                    placeholder="john.doe@gmail.com"
                  />
                  <CustomInput
                    label="Phone Number"
                    type="Number"
                    placeholder="john.doe@gmail.com"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <CustomInput
                    label="Password"
                    type="password"
                    placeholder="•••••••••••••••••••••••••"
                    showPasswordToggle
                  />
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    placeholder="•••••••••••••••••••••••••"
                    showPasswordToggle
                  />
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 "
                  />
                  <span className="text-gray-700">
                    I agree to all the
                    <a href="" className="text-coral-pink">
                      Terms
                    </a>
                    &nbsp; and &nbsp;
                    <a href="" className="text-coral-pink">
                      Privacy Policies
                    </a>
                  </span>
                </label>
              </div>
              <div className=" flex flex-col items-center justify-center gap-1">
                <CustomButton
                  fullWidth
                  variant="primary"
                  type="submit"
                  className="rounded-sm my-3! "
                >
                  Create Account
                </CustomButton>
                <span>
                  Already have an account?
                  <a href="/login" className="text-coral-pink">
                    Login
                  </a>
                </span>
              </div>

              <div className="mt-8">
                <AuthDivider text="Or signup with" />

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
          </form>
        </div>
      </div>
    </AuthCard>
  );
};

export default SignupForm;
