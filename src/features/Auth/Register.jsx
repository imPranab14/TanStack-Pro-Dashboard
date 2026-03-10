import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabase/superbase";

export default function Register() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    console.log("Form Data", e);

    //NOTE User Registration
    const { data, error } = await supabase.auth.signUp({
      email: e.email,
      password: e.password,
    });
    if (error) console.log(error);
    else console.log("User created", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} placeholder="Enter your email" />

      <input {...register("password")} placeholder="Enter your password" />

      <input type="submit" />
    </form>
  );
}
