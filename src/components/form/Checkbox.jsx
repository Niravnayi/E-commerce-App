import React from "react";
import { Label } from "../ui/label";
import { useController } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";

const FormCheckbox = ({
  label,
  name,
  control,
  defaultValue,
  options,
  rules,
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

      
        {options.map((option) => (
          <div className="flex items-center space-x-2" key={option.id}>
            <Checkbox
              checked={field.value?.includes(option.id)}
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...field.value, option.id])
                  : field.onChange(
                      field.value?.filter((value) => value !== option.id)
                    );
              }}
            />
            <Label htmlFor="r1">{option.label}</Label>
          </div>
        ))}
      {error && <p className="small p-0 !m-0 text-red-400">{error.message}</p>}
    </div>
  );
};

export default FormCheckbox;
