import React, { useState } from "react";

function ShiftCalculation() {
  const [inputDate, setInputDate] = useState(null);

  //Return current shift
  function handelShift(date) {
    let shift;
    const getHours = new Date(date).getHours();
    console.log("getHours", getHours);
    //Shift A
    if (6 <= getHours && getHours <= 13) {
      shift = "A";
    }
    //Shift B
    else if (14 <= getHours && getHours <= 22) {
      shift = "B";
    } else {
      shift = "C";
    }
    console.log("shift", shift);

    return shift;
  }

  //NOTE Form Submit
  function handelSubmit(e) {
    e.preventDefault();
    console.log("inputDate", inputDate);

    //Call Handel Shift Function
    const currentShift = handelShift(inputDate);
    console.log("currentShift", currentShift);
  }

  return (
    <>
      <div>ShiftCalculation</div>
      <form onSubmit={(e) => handelSubmit(e)}>
        <input
          type="datetime-local"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export default ShiftCalculation;
