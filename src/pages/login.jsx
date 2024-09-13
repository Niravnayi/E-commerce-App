import React, { useContext, useEffect } from "react";
import { Button } from "../components/ui/button";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import { Link, useNavigate } from "react-router-dom";
import ThemContext from "../context/themeContext";
import AuthContext from "../context/authContext";

const fields = [
  {
    component: FormInput,
    label: "Email",
    placeholder: "elon.musk@tesla.com",
    name: "email",
    type: "email",
    defaultValue: "",
    autoComplete: "email",
    rules: {
      required: {
        value: true,
        message: "Email is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "Password",
    placeholder: "Strong Password",
    name: "password",
    type: "password",
    autoComplete: "new-password",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Password is mendatory..",
      },
    },
  },
];

function Login() {
  const { login } = useContext(AuthContext);
  return (
    <>
     <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
      <ReactHookForm fields={fields} onSubmit={login} />
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
      <div className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/auth/register" className="underline">
              Register
            </Link>
          </div>
      <ThemContext.Consumer>
        {(value) => {
          return <p>{value.theme}</p>;
        }}
      </ThemContext.Consumer>
    </>
  );
}

export default Login;
