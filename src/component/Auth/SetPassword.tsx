import AuthCard from "./AuthCard";
import Image from "next/image";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import AuthHeader from "./AuthHeader";

const SetPassword = () => {
  return (
    <AuthCard>
      <div className="flex pr-2 md:pr-10 ">
        <div className="w-full lg:w-1/2 p-6 md:p-12 ">
          <AuthHeader
            title="Set a password"
            subtitle="Your previous password has been reseted. Please set a new password
              for your account."
            className="mb-8"
          />

          <form className="flex flex-col gap-8">
            <div className="space-y-5">
              <CustomInput
                label="Create Password"
                type="password"
                placeholder="7789BM6X@@H&$K_"
                required
                showPasswordToggle
              />

              <CustomInput
                label="Re-enter Password"
                type="password"
                placeholder="7789BM6X@@H&$K_"
                required
                showPasswordToggle
              />
            </div>

            <CustomButton type="submit" variant="primary" fullWidth>
              Set password
            </CustomButton>
          </form>
        </div>

        <div className="hidden lg:flex lg:w-1/2 rounded-3xl items-center justify-center relative">
          <Image
            src="img/set-password.svg"
            alt="set-password"
            height={316}
            width={459}
          />
        </div>
      </div>
    </AuthCard>
  );
};

export default SetPassword;
