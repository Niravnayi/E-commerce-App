import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

const FormOTP = ({ field, className }) => {
  return (
    <FormItem className={className}>
      <FormLabel>One-Time Password</FormLabel>
      <FormControl>
        <InputOTP maxLength={6} {...field}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </FormControl>
      <FormDescription>
        Please enter the one-time password sent to your phone.
      </FormDescription>
      <FormMessage />
    </FormItem>
  );
};

export default FormOTP;
