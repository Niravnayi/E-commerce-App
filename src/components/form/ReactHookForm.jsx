import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Form, FormField } from "../ui/form";
import { cn } from "../../lib/utils";

const ReactHookForm = ({ fields, onSubmit, className }) => {
  const form = useForm({
    mode: "all",
    defaultValues: fields.reduce(
      (p, c) => ({ ...p, [c.name]: c.defaultValue }),
      {}
    ),
  });

  return (
    <Form {...form}>
      {form.formState.errors?.root?.message && (
        <p className="text-red-500 text-center text-xl">
          {form.formState.errors.root.message}
        </p>
      )}

      <form
        className={cn("grid gap-4", className)}
        onSubmit={form.handleSubmit((data) => onSubmit(data, form))}
      >
        {fields.map(
          ({ component: Component, name, defaultValue, rules, ...rest }) => {
            const { validate, ...restRules } = rules;
            console.log("validate", validate);

            let compare = () => {};

            if (validate) {
              compare = (value) => {
                return (
                  value === form.watch(validate[1]) ||
                  `value should Match with ${validate[1]}`
                );
              };
            }

            return (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => <Component field={field} {...rest} />}
                rules={{ ...restRules, validate: compare }}
              />
            );
          }
        )}

        <Button
          type="submit"
          className="w-ful"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </Form>
  );
};

export default ReactHookForm;
