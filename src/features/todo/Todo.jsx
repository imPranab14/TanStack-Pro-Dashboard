import React, { useEffect, useState } from "react";
import { insertTodo, selectTodo } from "./api/todo.api";
import toast, { Toaster } from "react-hot-toast";

function Todo() {
  const [data, setData] = useState(null);
  const [todoList, setTodoList] = useState([]);

  //Submit todo form
  async function handelSubmit(e) {
    e.preventDefault();
    //IMPORTANT Insert DB
    try {
      const response = await insertTodo(data);
      console.log("api_res", response);
      //Toast Notification
      if (response.status === 201) {
        toast.success("Task Added Successfully");
      }
    } catch (error) {
      console.log("failed to insert", error);
    }
  }

  //NOTE Select todo data
  async function fetchTodoData() {
    try {
      const response = await selectTodo();
      if (response.status === 200) {
        setTodoList(response.data);
      }
    } catch (error) {
      console.log("todo list api call", error);
    }
  }

  //Select todo
  useEffect(() => {
    fetchTodoData();
  }, []);

  console.log("todoList", todoList);
  return (
    <>
      <>
        <div className="w-96">
          <h1 className="text-xl font-bold text-center mb-6">
            📝 TODO Application
          </h1>

          <form onSubmit={handelSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Enter some details..."
              onChange={(e) => setData(e.target.value)}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add
            </button>
          </form>

          <Toaster />
        </div>
      </>
    </>
  );
}

export default Todo;
