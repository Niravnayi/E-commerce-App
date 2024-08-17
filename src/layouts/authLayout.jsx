import React from "react";

import { Link, Outlet, useLocation } from "react-router-dom";

const AuthLayout = () => {
  let location = useLocation();

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          {/* <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div> */}
          <Outlet />
          {/* <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/auth/register" className="underline">
              Login
            </Link>
          </div> */}
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <img
          src="https://media.istockphoto.com/id/1138637828/photo/surprised-amazing-woman-isolated-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=foeHX4x_HAgWC0SZS16L-1qTcJt7kKCeL7748IfdrUY="
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
