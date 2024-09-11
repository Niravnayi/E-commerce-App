import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useController } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const FormInput = ({ field, label, className, ...rest }) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input {...field} {...rest} />
      </FormControl>
      <FormDescription></FormDescription>
      <FormMessage />
    </FormItem>
  );
};

export default FormInput;
