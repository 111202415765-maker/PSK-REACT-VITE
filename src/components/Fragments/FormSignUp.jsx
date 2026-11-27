import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import GoogleIcon from "../Elements/GoogleIcon";

function FormSignUp() {
  return (
    <>
      <form>
        {/* input */}
        <LabeledInput label="Name" name="name" placeholder="Tanzir Rahman" />
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

        <p className="mb-4 text-sm text-gray-02">
          By continuing, you agree to our{" "}
          <a href="#" className="text-primary">
            terms of service.
          </a>
        </p>

        {/* button sign up */}
        <Button>Sign up</Button>
      </form>

      <div className="my-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-05" />
        <span className="text-xs text-gray-03">or sign up with</span>
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
        Already have an account?{" "}
        <a href="#" className="font-semibold text-primary">
          Sign in here
        </a>
      </p>
    </>
  );
}

export default FormSignUp;
