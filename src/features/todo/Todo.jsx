import React, { useEffect, useState } from "react";
import { deleteTodo, insertTodo, selectTodo } from "./api/todo.api";
import toast, { Toaster } from "react-hot-toast";

function Todo() {
  const [data, setData] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [loader, setLoader] = useState(false);
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
        //Select TODO API Call
        fetchTodoData();
        setData(null);
      }
    } catch (error) {
      console.log("failed to insert", error);
    }
  }

  //NOTE Select todo data
  async function fetchTodoData() {
    try {
      setLoader(true);
      const response = await selectTodo();
      if (response.status === 200) {
        setTodoList(response.data);
      }
    } catch (error) {
      console.log("todo list api call", error);
    } finally {
      setLoader(false);
    }
  }

  //Select todo
  useEffect(() => {
    fetchTodoData();
  }, []);

  //Handel Delete Tack
  async function handelDelete(ele) {
    console.log("Delete_ele_id", ele);
    const response = await deleteTodo(ele);
    console.log("delete_taskname_response", response);
  }

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
          {loader && <h1>Loading....</h1>}
          {todoList?.map((ele, id) => {
            return (
              <div key={id} className="flex gap-2">
                <p>{ele.task_name}</p>
                {/* <p>{ele.id}</p> */}
                <button>Edit</button>
                <button onClick={() => handelDelete(ele.id)}>Delete</button>
              </div>
            );
          })}
          {todoList && todoList.length === 0 && <p>No data found</p>}

          <Toaster />
        </div>
      </>
    </>
  );
}

export default Todo;
