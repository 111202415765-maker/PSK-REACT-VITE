import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";

const SignInPage = () => {
  return (
    <AuthLayout title="Sign In">
      <FormSignIn />
    </AuthLayout>
  );
};

export default SignInPage;
