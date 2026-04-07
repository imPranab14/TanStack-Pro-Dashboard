import React from "react";

function Tailwind() {
  return (
    <>
      <h1>Tailwind</h1>

      <div className="container bg-amber-300 mx-auto">Header Container</div>

      <div className="w-1/2 bg-green-300">Width Section (50%)</div>

      <div className="w-screen bg-orange-300">Full Width Section</div>

      {/* NOTE Flex  */}
      {/* Flexbox (1D Layout)    (row OR column) */}
      <div class="flex space-x-4 gap-2 bg-gray-400 flex-col">
        <div className="bg-orange-600">1</div>
        <div className="bg-pink-600">3</div>
      </div>

      <div class="flex justify-between items-center p-4 bg-gray-200">
        <h1>Logo</h1>
        <div class="flex gap-4">
          <a>Home</a>
          <a>About</a>
        </div>
      </div>
    </>
  );
}

export default Tailwind;
