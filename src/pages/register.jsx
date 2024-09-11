import React from "react";
import { Button } from "../components/ui/button";
import CustomForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";

import { useNavigate } from "react-router-dom";

// const wait = (time) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });

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
      validate : ["compare" , "password"]
    },
  },
];

function Register() {
  const navigate = useNavigate();
  const onSubmit = async (data,form) => {
    try {
      const { confirmPassword, ...rest } = data;
      // console.log(rest);
      
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(rest),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json);
      
      console.log(json);
      navigate("/")

    } catch (error) {
      form.setError("root",{message:error.message},false)
      console.log(error);
      
    }
  };

  return (
    <>
      <CustomForm fields={fields} onSubmit={onSubmit} />

      <Button variant="outline" className="w-full">
        Register with Google
      </Button>
    </>
  );
}

export default Register;