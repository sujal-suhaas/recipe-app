import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

const formSchema = authFormSchema("sign-up");

interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item w-full">
          <FormLabel className="form-label font-sofiaPro font-normal">{label}</FormLabel>
          <div className="flex">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class font-sofiaPro text-sm placeholder:text-xs placeholder:font-light"
                type={name === "password" ? "password" : "text"}
                {...field}
              ></Input>
            </FormControl>
          </div>
          <FormMessage className="form-message mt-2 font-sofiaPro font-light text-xs" />
        </div>
      )}
    />
  );
};

export default CustomInput;
