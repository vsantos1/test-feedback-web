import { Input } from "../Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { FormEvent } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/schema";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const handleForm: SubmitHandler<FieldValues> = async (data) => {
    try {
      const response = await axios.post(
        "http://3.235.124.255:8080/v1/contacts",
        data
      );

      console.log(response);
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  return (
    <S.FormContainer>
      <h1>Reach out to us!</h1>
      <S.FormUsage onSubmit={handleSubmit(handleForm)}>
        <Input
          type="text"
          label="Name"
          placeholder="Your name*"
          {...register("name")}
          error={errors.name?.message}
        />
        <Input
          type="email"
          label="Email"
          placeholder="Your email*"
          {...register("email")}
          error={errors.email?.message}
        />
        <S.Textarea placeholder="Your message*" {...register("message")} />
        <S.Button type="submit" disabled={isSubmitting}>
          Send message{" "}
          {isSubmitting && (
            <S.SpinnerRotate>
              <FaSpinner />
            </S.SpinnerRotate>
          )}
        </S.Button>
      </S.FormUsage>
      {isSubmitSuccessful && (
        <S.SuccessMessage>
          <h2>Message sent successfully!</h2>
        </S.SuccessMessage>
      )}
    </S.FormContainer>
  );
}
