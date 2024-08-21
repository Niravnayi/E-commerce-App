import React from "react";
import { Label } from "../ui/label";
import { useController } from "react-hook-form";
import { Slider } from "../ui/slider";

const FormSlider = ({
  label,
  name,
  control,
  defaultValue,
  rules,
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
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        // className={cn("w-[60%]", className)}
        {...props}
      />
      {error && <p className="small p-0 !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormSlider;
