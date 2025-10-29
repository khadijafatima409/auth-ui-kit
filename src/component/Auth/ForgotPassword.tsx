"use client";
import React from "react";

import AuthCard from "./AuthCard";
import Image from "next/image";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import SocialButton from "./SocialButton";
import { SOCIAL_PROVIDERS } from "@/data/social";
import AuthDivider from "./AuthDivder";
import BackToLogin from "./BackToLogin";
import AuthHeader from "./AuthHeader";

const ForgotPassword = () => {
  return (
    <AuthCard logoAlign="left">
      <div className="flex">
        <div className="w-full lg:w-1/2 p-6 md:p-12 ">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <BackToLogin />

              {/* <div className="flex flex-col gap-2 text-dark-gray">
                <h1 className="text-3xl font-bold  mb-2">
                  Forgot your password?
                </h1>
                <p className=" text-sm">
                  Don’t worry, happens to all of us. Enter your email below to
                  recover your password
                </p>
              </div> */}
              <AuthHeader
                title="Forgot your password?"
                subtitle="Don’t worry, happens to all of us. Enter your email below to recover your password"
              />
            </div>
            <div className="flex flex-col gap-8">
              <CustomInput
                label="Email"
                type="email"
                placeholder="john.doe@gmail.com"
              />

              <CustomButton type="submit" variant="primary" fullWidth>
                Submit
              </CustomButton>
            </div>
          </div>
          <div className="mt-8">
            <AuthDivider text="Or login with" />

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
            src="img/forgot-password.svg"
            alt="apple"
            height={316}
            width={459}
          />
        </div>
      </div>
    </AuthCard>
  );
};

export default ForgotPassword;
