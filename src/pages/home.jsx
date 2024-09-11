import React from "react";
import ReactHookForm from "../components/form/ReactHookForm";
import FormInput from "../components/form/Input";
import FormRadioGroup from "../components/form/RadioGroup";
import FormTextArea from "../components/form/CustomTextArea";
import FormCheckboxGroup from "../components/form/CheckboxGroup";

const fields = [
  {
    component: FormInput,
    label: "FirstName",
    placeholder: "Elon ",
    name: "firstname",
    type: "text",
    defaultValue: "",
    autoComplete: "name",
    rules: {
      required: {
        value: true,
        message: "FirstName is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "LastName",
    placeholder: "Musk",
    name: "lastname",
    type: "text",
    autoComplete: "name",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "LastName is mendatory..",
      },
    },
  },
  {
    component: FormInput,
    label: "Email",
    placeholder: "elonmusk@gmail.com",
    name: "email",
    type: "email",
    autoComplete: "email",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Email is mendatory..",
      },
    },
    className: "col-span-2",
  },
  {
    component: FormRadioGroup,
    label: "Query Type",
    name: "query-type",
    defaultValue: "",
    options: [
      {
        value: "general-enquiry",
        text: "General Enquiry",
      },
      {
        value: "support-request",
        text: "Support Request",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "Query-Type is mendatory..",
      },
    },
    className: "col-span-2",
  },
  {
    component: FormTextArea,
    label: "Message",
    placeholder: "Enter your message here...",
    name: "message",
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Message is mendatory..",
      },
    },
    className: "col-span-2 ",
  },
  {
    component: FormCheckboxGroup,
    label: "Hobbies",
    name: "hobbies",
    defaultValue: [],
    options: [
      {
        value: "true",
        text: "I consent to being contacted by the team*",
      },
    ],
    rules: {
      required: {
        value: true,
        message: "this is mendatory..",
      },
    },
    className: "col-span-2 ",
  },
];

const Home = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <ReactHookForm
      fields={fields}
      onSubmit={onSubmit}
      className="grid-cols-2"
    />
  );
};

export default Home;
