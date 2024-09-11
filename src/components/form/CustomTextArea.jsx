import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const FormTextArea = ({ field, label, desc, className, ...rest }) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Textarea
          placeholder="Tell us a little bit about yourself"
          className="resize-none"
          {...field}
          {...rest}
        />
      </FormControl>
      {desc && <FormDescription>{desc}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormTextArea;
