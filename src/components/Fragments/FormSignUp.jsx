import React from "react";
import { Link } from "react-router-dom";
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
          placeholder="••••••••••••••"
        />

        <p className="mb-4 text-sm text-gray-01">
          By continuing, you to agree to our{" "}
          <a href="#" className="text-primary">
            terms of service.
          </a>
        </p>

        {/* button sign up */}
        <Button>Sign Up</Button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <span className="h-px flex-1 bg-gray-05" />
        <span className="text-sm text-gray-03">or sign up with</span>
        <span className="h-px flex-1 bg-gray-05" />
      </div>

      {/* button google */}
      <Button type="button" variant="secondary">
        <span className="flex items-center justify-center">
          <GoogleIcon />
          Continue with Google
        </span>
      </Button>

      {/* link ke halaman login */}
      <p className="mt-6 text-center text-sm text-gray-01">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-primary">
          Sign In Here
        </Link>
      </p>
    </>
  );
}

export default FormSignUp;
