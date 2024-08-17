import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomForm from "../components/form/CustomForm";

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const fields = [
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
];

function Login() {
 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "all" });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <CustomForm fields={fields} onSubmit={onSubmit} />

      {/* <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...register("email", {
              required: {
                value: true,
                message: "Pleace Enter your email address",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors?.email && (
            <p className="small p-0 !m-0 text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <Link
              to="/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Forgot your password?
            </Link>
          </div>
          <div className="flex">
            <Input
              id="password"
              type={passwordVisible ? "text" : "password"}
              {...register("password", {
                required: {
                  value: true,
                  message: "Pleace Enter your Password",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                  message:
                    "The password you entered is incorrect. Please ensure your password is 8 to 16 characters long and includes at least one uppercase letter, one lowercase letter, one number, and one special character.",
                },
              })}
            />
            <button
              onClick={togglePasswordVisibility}
              type="button"
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
        <Button
          type="submit"
          className="w-full active:opacity-80"
          disabled={!isValid || isSubmitting}
        >
          Login
        </Button>
      </form> */}
      <Button variant="outline" className="w-full">
        Login with Google
      </Button>
      <div className="mt-4 text-center text-sm">
        Don't have an account?{" "}
        <Link to="/auth/register" className="underline">
          Register
        </Link>
      </div>
    </>
  );
}

export default Login;
