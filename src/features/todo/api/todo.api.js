import { supabase } from "../../../lib/supabase/superbase";

//Insert todo data
async function insertTodo(data) {
  const response = await supabase.from("todo").insert({
    task_name: data, //Insert Supabase DB
  });
  return response;
}

//Select todo data
async function selectTodo() {
  const response = await supabase.from("todo").select("*");
  return response;
}

//Delete todo data
async function deleteTodo(ele) {
  const response = await supabase.from("todo").delete().eq("id", ele);
  return response;
}

export { insertTodo, selectTodo, deleteTodo };
