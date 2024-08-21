import React from "react";
import { Label } from "../ui/label";
import { useController } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const FormRadioGroup = ({
  label,
  name,
  control,
  defaultValue,
  options,
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

      <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
        {options.map((option) => (
          <div className="flex items-center space-x-2" key={option.value}>
            <RadioGroupItem value={option.value} id="r1" />
            <Label htmlFor="r1">{option.text}</Label>
          </div>
        ))}
      </RadioGroup>
      {error && <p className="small p-0 !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormRadioGroup;
