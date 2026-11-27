import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import GoogleIcon from "../Elements/GoogleIcon";

function FormSignIn() {
  return (
    <>
      <form>
        {/* input */}
        <LabeledInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="hello@example.com"
        />
        <LabeledInput
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••••••"
        />

        {/* check box */}
        <div className="mb-6 flex items-center justify-between">
          <CheckBox name="remember">Remember me</CheckBox>
          <a href="#" className="text-sm font-medium text-primary">
            Forgot Password?
          </a>
        </div>

        {/* button login */}
        <Button>Log in</Button>
      </form>

      <div className="my-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-05" />
        <span className="text-xs text-gray-03">or sign in with</span>
        <span className="h-px flex-1 bg-gray-05" />
      </div>

      {/* button google */}
      <Button type="button" variant="secondary">
        <span className="flex items-center justify-center">
          <GoogleIcon />
          Continue with Google
        </span>
      </Button>

      <p className="mt-6 text-center text-sm text-gray-02">
        Don&apos;t have an account?{" "}
        <a href="#" className="font-semibold text-primary">
          Sign up here
        </a>
      </p>
    </>
  );
}

export default FormSignIn;
