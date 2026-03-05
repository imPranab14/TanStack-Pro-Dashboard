import React, { useState } from "react";
import { insertTodo } from "./api/todo.api";

function Todo() {
  const [data, setData] = useState(null);
  async function handelSubmit(e) {
    e.preventDefault();
   
    //IMPORTANT Insert DB 
    try {
      const response= await insertTodo(data)
      console.log("api_res",response);
      // if(response.status === 201){

      // }
    } catch (error) {
      console.log("failed to insert",error);
      
    }
  }
  return (
    <>
      <h1>TODO Application</h1>
      {/* Todo Form */}
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter Some Details"
          onChange={(e) => setData(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default Todo;
