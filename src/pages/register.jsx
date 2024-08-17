import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import FormInput from "../components/form/Input";
import { Link } from "react-router-dom";
import CustomForm from "../components/form/CustomForm";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const fields = [
  {
    label: "Name",
    placeholder: "Elon Musk",
    name: "name",
    autoComplete: "name",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Name is mendatory",
      },
    },
  },
  {
    label: "Email",
    placeholder: "elon.musk@tesla.com",
    name: "email",
    type: "email",
    autoComplete: "email",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Email is mendatory",
      },
    },
  },
  {
    label: "birthDate",
    placeholder: "dd/mm/yyyy",
    name: "birthDate",
    type: "date",
    autoComplete: "bday",
    defaultValue: "18",
    rules: {
      required: {
        value: true,
        message: "BirthDate is mendatory",
      },
    },
  },

  {
    label: "Password",
    placeholder: "Strong Password",
    name: "password",
    type: "password",
    autoComplete: "new-password",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Password is mendatory",
      },
    },
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm Password",
    name: "confirmPasword",
    type: "password",
    autoComplete: "new-password",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Confirm Password is mendatory",
      },
    },
  },
];

function Register() {
  const onSubmit = async (data) => {
    await wait(5000);
    console.log(data);
  };

  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>

      
<CustomForm fields={fields} onSubmit={onSubmit} />

      <Button variant="outline" className="w-full">
        Register with Google
      </Button>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link to="/auth/" className="underline">
          Login
        </Link>
      </div>
    </>
  );
}

export default Register;
