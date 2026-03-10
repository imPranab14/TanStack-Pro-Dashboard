import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabase/superbase";

export default function Register() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (e) => {
    //NOTE User Registration
    const { data, error } = await supabase.auth.signUp({
      email: e.email,
      password: e.password,
    });
    //NOTE Reset form after submission
    if (error) console.log("api_error", error);
    else console.log("User created", data);
    reset();
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email")} placeholder="Enter your email" />
        <input {...register("password")} placeholder="Enter your password" />
        <input type="submit" />
      </form>
    </>
  );
}
