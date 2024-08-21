import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import FormInput from "../components/form/Input";
import { Link } from "react-router-dom";
import CustomForm from "../components/form/CustomForm";
import FormSelect from "../components/form/Select";
import FormRadioGroup from "../components/form/RadioGroup";
import FormCheckbox from "../components/form/Checkbox";
import FormSlider from "../components/form/Slider";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const fields = [
  {
    component: FormInput,
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
    component: FormInput,
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
    component: FormInput,
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
    component: FormSelect,
    label: "Gender",
    placeholder: "Select Gender",
    name: "gender",
    defaultValue: "",
    options: [
      {
        value: "male",
        text: "Male",
      },
      {
        value: "female",
        text: "Female",
      },
      {
        value: "other",
        text: "Other",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Gender is mendatory",
      },
    },
  },
  {
    component: FormRadioGroup,
    label: "xyz",
    name: "xyz",
    defaultValue: "",
    options: [
      {
        value: "a",
        text: "A",
      },
      {
        value: "b",
        text: "B",
      },
      {
        value: "c",
        text: "C",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Gender is mendatory",
      },
    },
  },
  {
    component: FormCheckbox,
    label: "Hobbies",
    name: "hobbies",
    defaultValue: [],
    options: [
      {
        id: "recents",
        label: "Recents",
      },
      {
        id: "home",
        label: "Home",
      },
      {
        id: "applications",
        label: "Applications",
      },
      {
        id: "desktop",
        label: "Desktop",
      },
      {
        id: "downloads",
        label: "Downloads",
      },
      {
        id: "documents",
        label: "Documents",
      },
    ],
    // rules: {
    //   required: {
    //     value: true,
    //     message: "Password is mendatory",
    //   },
    // },
  },
  {
  component: FormSlider,
  label: "slider",
  name: "slider",
  defaultValue: "",
  // rules: {
  //   required: {
  //     value: true,
  //     message: "BirthDate is mendatory",
  //   },
  // },
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
        message: "Password is mendatory",
      },
    },
  },
  {
    component: FormInput,
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
