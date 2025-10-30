"use client";
import React from "react";
import AuthCard from "./AuthCard";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import BackToLogin from "./BackToLogin";
import AuthHeader from "./AuthHeader";

const VerifyCode = () => {
  const router = useRouter();
  return (
    <AuthCard logoAlign="left">
      <div className="flex">
        <div className="w-full lg:w-1/2 p-6 md:p-12">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <BackToLogin />

              <AuthHeader
                title="Verify code"
                subtitle="An authentication code has been sent to your email."
              />
            </div>
            <div className=" flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 md:gap-4 justify-center ">
                  {[...Array(6)].map((_, i) => (
                    <input
                      key={i}
                      type="string"
                      placeholder=""
                      className=" w-6 h-6 lg:w-10 lg:h-10 xl:w-12 xl:md:h-12 text-center border rounded "
                    />
                  ))}
                </div>
                <span className="text-gray-700">
                  Didn’t receive a code?{" "}
                  <a href="" className="text-coral-pink">
                    Resend
                  </a>
                </span>
              </div>
              <CustomButton
                onClick={async () => {
                  await router.push("/set-password");
                }}
              >
                Verify
              </CustomButton>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-1/2 rounded-3xl items-center justify-center relative">
          <Image
            src="img/verify-code.svg"
            alt="verify-code"
            height={316}
            width={459}
          />
        </div>
      </div>
    </AuthCard>
  );
};

export default VerifyCode;
