"use client";
import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import SocialButton from "./SocialButton";
import { SOCIAL_PROVIDERS } from "@/data/social";
import AuthCard from "./AuthCard";
import AuthDivider from "./AuthDivder";
import { useRouter } from "next/navigation";
import AuthHeader from "./AuthHeader";

const SignupForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("form submitted", formData);

    return;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      console.log("Current values:", updated);
      return updated;
    });
  };
  return (
    <AuthCard logoAlign="right">
      <div className="flex gap-12 ">
        <div className="hidden lg:flex w-full lg:w-1/2 rounded-3xl items-center justify-center relative">
          <Image src={"img/signup.svg"} alt="signup" height={233} width={439} />
        </div>
        <div className="flex flex-col mx-auto lg:mx-0 gap-6">
          <AuthHeader
            title="Sign up"
            subtitle="Let’s get you all st up so you can access your personal account."
          />

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <div>
                <div className=" flex flex-col md:flex-row gap-4 md:gap-2 justify-between pb-5">
                  <CustomInput
                    label="First Name"
                    type="text"
                    value={formData.first_name}
                    placeholder="john.doe@gmail.com"
                    onChange={handleChange}
                    name="first_name"
                  />
                  <CustomInput
                    label="Last Name"
                    type="text"
                    value={formData.last_name}
                    placeholder="john.doe@gmail.com"
                    name="last_name"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-2 justify-between pb-5">
                  <CustomInput
                    label="Email"
                    type="email"
                    placeholder="john.doe@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                  <CustomInput
                    label="Phone Number"
                    type="Number"
                    placeholder="john.doe@gmail.com"
                    value={formData.phone_number}
                    onChange={handleChange}
                    name="phone_number"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <CustomInput
                    label="Password"
                    type="password"
                    placeholder="•••••••••••••••••••••••••"
                    showPasswordToggle
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                  />
                  <CustomInput
                    label="Confirm Password"
                    type="password"
                    placeholder="•••••••••••••••••••••••••"
                    showPasswordToggle
                    onChange={handleChange}
                    value={formData.confirm_password}
                    name="confirm_password"
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
              <div>
                <CustomButton
                  fullWidth
                  variant="primary"
                  className="rounded-sm my-3! "
                  // onClick={async () => {
                  //   console.log("Button clicked before navigation");
                  //   await router.push("/verify-code"); // then navigate
                  // }}
                  type="submit"
                >
                  Create Account
                </CustomButton>

                <span>
                  Already have an account?
                  <a href="/login" className="text-coral-pink">
                    &nbsp; Login &nbsp;
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
