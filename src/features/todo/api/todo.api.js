import { supabase } from "../../../lib/supabase/superbase";

//Insert todo data
async function insertTodo(data) {
  const response = await supabase.from("todo").insert({
    task_name: data, //Insert Supabase DB
  });
  return response
}

export { insertTodo };
