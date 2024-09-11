import React from "react";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";

const FormCheckboxGroup = ({ field, options, label, className }) => {
  return (
    <FormItem className={className}>
      <FormLabel className="text-base">{label}</FormLabel>
      {options.map((item) => (
        <FormItem
          key={item.value}
          className="flex flex-row items-start space-x-3 space-y-0"
        >
          <FormControl>
            <Checkbox
              checked={field.value?.includes(item.value)}
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...field.value, item.value])
                  : field.onChange(
                      field.value?.filter((value) => value !== item.value)
                    );
              }}
            />
          </FormControl>
          <FormLabel className="text-sm font-normal">{item.text}</FormLabel>
        </FormItem>
      ))}
      <FormMessage />
    </FormItem>
  );
};

export default FormCheckboxGroup;
