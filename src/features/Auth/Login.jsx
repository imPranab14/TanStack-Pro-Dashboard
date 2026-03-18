import React from "react";
import { useForm } from "react-hook-form";
import { supabase } from "../../lib/supabase/superbase";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (e) => {
    //NOTE User Registration
    const { data, error } = await supabase.auth.signInWithPassword({
      email: e.email,
      password: e.password,
    });

    //API Error
    if (error) {
      return toast.error(error.message, {
        position: "top-center",
      });
    }
    //If Login Successfully
    //console.log("Login Successfully", data);
    if (data) {
      toast.success("Login Successfully", {
        position: "top-center",
      });
    }
    navigate("/dashboard");
    //NOTE Reset form after submission
    reset();
  };

  return (
    <>
      <form
        className="max-w-md mx-auto mt-10 p-6 bg-white shadow-sm rounded-xl space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </>
  );
}
