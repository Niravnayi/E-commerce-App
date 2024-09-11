import React from "react";
import { Slider } from "../ui/slider";
import { FormDescription, FormItem, FormLabel, FormMessage } from "../ui/form";

const FormSlider = ({ field, label, className, desc }) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <Slider
        value={field.value}
        onValueChange={field.onChange}
        max={100}
        step={1}
      />
      {desc && <FormDescription>{desc}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormSlider;
