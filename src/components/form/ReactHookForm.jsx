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
        <p className="text-red-400 text-center text-xl">
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
            return (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => <Component field={field} {...rest} />}
                rules={{
                  ...restRules,
                  ...(validate && {
                    validate: (value) => validate(value)(form.watch),
                  }),
                }}
              />
            );
          }
        )}

        <Button
          type="submit"
          className="w-full"
          disabled={!form.formState.isValid || form.formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </Form>
  );
};

export default ReactHookForm;
