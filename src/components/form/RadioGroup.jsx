import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { cn } from "../../lib/utils";

const FormRadioGroup = ({ field, options, label, className }) => {
  return (
    <FormItem className={cn("space-y-3", className)}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-col space-y-1"
        >
          {options.map((x) => (
            <FormItem
              key={x.value}
              className="flex items-center space-x-3 space-y-0"
            >
              <FormControl>
                <RadioGroupItem value={x.value} />
              </FormControl>
              <FormLabel className="font-normal">{x.text}</FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default FormRadioGroup;
