import React from "react";
import { Link } from "react-router-dom";
import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import GoogleIcon from "../Elements/GoogleIcon";

function FormSignIn() {
  return (
    <>
      <form>
        {/* input */}
        <div className="mb-4">
          <LabeledInput
            label="Email Address"
            id="email"
            name="email"
            type="email"
            placeholder="hello@example.com"
            backgroundColor="bg-white"
          />
        </div>
        <div className="mb-4">
          <LabeledInput
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="••••••••••••••"
            backgroundColor="bg-white"
          />
        </div>

        {/* check box */}
        <div className="mb-4">
          <CheckBox name="remember">Keep me signed in</CheckBox>
        </div>

        {/* button login */}
        <Button>Login</Button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-05" />
        <span className="text-sm text-gray-03">or sign in with</span>
        <span className="h-px flex-1 bg-gray-05" />
      </div>

      {/* button google */}
      <Button type="button" variant="secondary">
        <span className="flex items-center justify-center">
          <GoogleIcon />
          Continue with Google
        </span>
      </Button>

      {/* link ke halaman register */}
      <p className="mt-6 text-center text-sm">
        <Link to="/register" className="font-semibold text-primary">
          Create an account
        </Link>
      </p>
    </>
  );
}

export default FormSignIn;
