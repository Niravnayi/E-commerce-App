import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useController } from "react-hook-form";

const FormInput = ({ label, name, control,defaultValue, rules, ...props }) => {
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
      <Input id={name} type="text" {...props} {...field} />
      {error && <p className="small p-0 !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormInput;
