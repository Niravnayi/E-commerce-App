import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useController } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FormSelect = ({
  label,
  name,
  control,
  defaultValue,
  rules,
  placeholder,
  options,
  ...props
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Select  onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>{option.text}</SelectItem>
            ))}
            {/* <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <p className="small p-0 !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormSelect;
