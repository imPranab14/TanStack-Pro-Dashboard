import React, { useState } from "react";

function Todo() {
  const [data, setData] = useState(null);
  function handelSubmit(e) {
    e.preventDefault()
    console.log("Form_submit",e,data);
  }
  return (
    <>
      <h1>todo app</h1>
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
