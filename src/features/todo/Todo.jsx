import React, { useEffect, useState } from "react";
import { deleteTodo, insertTodo, selectTodo, updateTodo } from "./api/todo.api";
import toast, { Toaster } from "react-hot-toast";

function Todo() {
  const [data, setData] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [updateData, setUpdateDate] = useState(false);
  const [updateUniqueId, setUpdateUniqueId] = useState(null);

  //Submit todo form
  async function handelSubmit(e) {
    e.preventDefault();
    //If input field is blank
    if (data.length == 0) {
     return toast.error("Input Data Blank");
    }

    //Update Section API Call
    if (updateData) {
      await updateAPICall(data); //Update API Function Call
    }

    //IMPORTANT Insert DB
    try {
      const response = await insertTodo(data);
      console.log("api_res", response);
      //Toast Notification
      if (response.status === 201) {
        toast.success("Task Added Successfully");
        //Select TODO API Call
        fetchTodoData();
        // setData(null);
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

  //Handel Delete Task
  async function handelDelete(id, task_name) {
    try {
      const response = await deleteTodo(id);
      if (response.status === 204) {
        toast.error(`Delete Task ${task_name} Successfully`);
        //Select TODO API Call
        fetchTodoData();
      }
    } catch (error) {
      console.log("delete task name api error", error);
    }
  }

  //Handel Update Task
  function handelUpdate(id, task_name) {
    setData(task_name);
    setUpdateDate(true);
    setUpdateUniqueId(id);
  }

  //Update API Call
  async function updateAPICall(params) {
    try {
      const response = await updateTodo(updateUniqueId, params);
      console.log("update_api_response", response);

      if (response.status === 200) {
        toast.success(`Update Task Successfully`);
        //Select TODO API Call
        fetchTodoData();

        //Set Default Value
        setUpdateDate(false);
        setUpdateUniqueId(null);
      }
    } catch (error) {
      console.log("delete task name api error", error);
    }
  }

  return (
    <>
      <>
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl border border-gray-100">
          {/* Header */}
          <h1 className="text-2xl font-extrabold text-center mb-8 text-gray-800 flex items-center justify-center gap-2">
            <span>📝</span> TODO Application
          </h1>

          {/* Input Form */}
          <form onSubmit={handelSubmit} className="flex gap-2 mb-8">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400 shadow-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-md shadow-blue-100"
            >
              {updateData ? "Update" : "Add"}
            </button>
          </form>

          {/* Loader */}
          {loader && (
            <div className="flex justify-center my-4">
              <div className="animate-pulse text-blue-500 font-medium">
                Loading tasks...
              </div>
            </div>
          )}

          {/* Todo List */}
          <div className="space-y-3">
            {todoList?.map((ele, id) => (
              <div
                key={id}
                className="group flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  <p className="text-gray-700 font-medium">{ele.task_name}</p>
                </div>

                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handelUpdate(ele.id, ele.task_name)}
                    className="text-sm font-medium text-blue-600 hover:bg-blue-100 px-3 py-1 rounded-lg transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handelDelete(ele.id, ele.task_name)}
                    className="text-sm font-medium text-red-600 hover:bg-red-100 px-3 py-1 rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {todoList && todoList.length === 0 && !loader && (
            <div className="text-center py-10">
              <p className="text-gray-400 italic">
                No tasks found. Relax or add one!
              </p>
            </div>
          )}

          <Toaster />
        </div>
      </>
    </>
  );
}

export default Todo;
