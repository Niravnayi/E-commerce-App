import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useForm } from "react-hook-form";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    await wait(5000);
    console.log(data);
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="elon musk"
          {...register("name", {
            required: {
              value: true,
              message: " Name is Mandatory..",
            },
          })}
        />
        {errors?.name && (
          <p className="small p-0 !m-0 text-red-400">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@example.com"
          {...register("email", {
            required: {
              value: true,
              message: "Email is Mandatory..",
            },
            pattern: {
              value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors?.email && (
          <p className="small p-0 !m-0 text-red-400">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <div className="flex">
          <Input
            id="password"
            type={passwordVisible ? "text" : "password"}
            {...register("password", {
              required: {
                value: true,
                message: "Password is Mandatory..",
              },
            })}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="ml-[-30px] bg-none border-none cursor-pointer "
          >
            {passwordVisible ? "🙈" : "👁️"}
          </button>
        </div>
        {errors?.password && (
          <p className="small p-0 !m-0 text-red-400">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="confirm-password">confirm-password</Label>
        <div className="flex">
          <Input
            id="confirm-password"
            type={passwordVisible ? "text" : "password"}
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is Mandatory..",
              },
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="ml-[-30px] bg-none border-none cursor-pointer"
          >
            {passwordVisible ? "🙈" : "👁️"}
          </button>
        </div>
        {errors?.confirmPassword && (
          <p className="small p-0 !m-0 text-red-400">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full active:opacity-80"
        disabled={!isValid || isSubmitting}
      >
        Register
      </Button>
      <Button variant="outline" className="w-full">
        Register with Google
      </Button>
    </form>
  );
}

export default Register;
