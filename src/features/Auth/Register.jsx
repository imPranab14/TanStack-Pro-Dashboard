import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabase/superbase";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (e) => {
    //NOTE User Registration
    const { data, error } = await supabase.auth.signUp({
      email: e.email,
      password: e.password,
    });

    //API Error
    if (error) {
      return toast.error(error.message, {
        position: "top-center",
      });
    }
    //If user register successfully 
    console.log("Register_User", data);
    if (data) {
      return toast.success("User Register Successfully", {
        position: "top-center",
      });
    }
    //NOTE Reset form after submission
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
      <Toaster />
    </>
  );
}
