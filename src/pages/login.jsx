import React from "react";
import { Button } from "../components/ui/button";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const onSubmit = async (data, form) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json);

      console.log(json);
      navigate("/");
    } catch (error) {
      form.setError("root", { message: error.message }, false);
      console.log(error);
    }
  };

  return (
    <>
      <ReactHookForm
        fields={fields}
        onSubmit={onSubmit}
       />
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
    </>
  );
}

export default Login;
