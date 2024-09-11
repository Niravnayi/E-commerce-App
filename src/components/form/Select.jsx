import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";

const FormSelect = ({
  field,
  options,
  label,
  className,
  desc,
  placeholder,
}) => {
  return (
    <FormItem className={className}>
      <FormLabel>{label}</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {options.map((x) => (
            <SelectItem key={x.value} value={x.value}>
              {x.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {desc && <FormDescription>{desc}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
};

export default FormSelect;
