import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import { Link, useNavigate } from "react-router-dom";
import ThemContext from "../context/themeContext";
import AuthContext from "../context/authContext";

const fields = [
  {
    component: FormInput,
    label: "Name",
    placeholder: "Elon Musk",
    name: "name",
    defaultValue: "",
    autoComplete: "name",
    rules: {
      required: {
        value: true,
        message: "Name is mendatory..",
      },
    },
  },
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
  {
    component: FormInput,
    label: "Confirm Password",
    placeholder: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    autoComplete: "new-password",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Password is mendatory..",
      },
      validate: (value) => {
        return (watch) =>
          value === watch("password") || `value should match with Password`;
      },
    },
  },
];

function Register() {
  return (
    <AuthContext.Consumer>
      {({ register }) => (
        <>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
          </div>
          <CustomForm fields={fields} onSubmit={register} />

          <Button variant="outline" className="w-full">
            Register with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth" className="underline">
              Login
            </Link>
          </div>
          <ThemContext.Consumer>
            {(value) => {
              return (
                <>
                  <p>{value?.theme}</p>
                  <button type="button" onClick={() => value.setTheme("light")}>
                    Change Theme
                  </button>
                </>
              );
            }}
          </ThemContext.Consumer>
        </>
      )}
    </AuthContext.Consumer>
  );
}

export default Register;
