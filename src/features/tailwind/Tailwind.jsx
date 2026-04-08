import React from "react";

function Tailwind() {
  return (
    <>
      {/* <h1>Tailwind</h1> */}

      {/* <div className="container bg-amber-300 mx-auto">Header Container</div>

      <div className="w-1/2 bg-green-300">Width Section (50%)</div>

      <div className="w-screen bg-orange-300">Full Width Section</div> */}

      {/* NOTE Flex  */}
      {/* Flexbox (1D Layout)    (row OR column) */}
      {/* <div class="flex space-x-4 gap-2 bg-gray-400 flex-col">
        <div className="bg-orange-600">1</div>
        <div className="bg-pink-600">3</div>
      </div> */}

      {/* <div class="flex justify-between items-center p-4 bg-gray-200">
        <h1>Logo</h1>
        <div class="flex gap-4">
          <a>Home</a>
          <a>About</a>
        </div>
      </div> */}

      {/* //NOTE Grid is a 2D layout system */}
      {/* <div class="grid grid-cols-3 gap-4">
        <div className="bg-amber-300">1</div>
        <div className="bg-green-300">2</div>
        <div className="bg-blue-300">3</div>
      </div> */}

      {/* Response Card Design */}

      {/* Design for small screens first
      Then improve for bigger screens 
      default → sm → md → lg → xl
      */}

      <h1 className="mb-2 bg-black sm:bg-red-300 md:bg-green-300 lg:bg-yellow-300">
        Response Section
      </h1>
      {/* <div class="text-sm md:text-lg lg:text-xl">
         Responsive Text
      </div> */}
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-red-300 hover:bg-blue-400 p-3">Hover Section</div>
        <div className="bg-blue-300 active:bg-green-300 p-3">
          Active Section
        </div>
        <div className="bg-red-300 p-3">3</div>
        <div className="bg-blue-300 p-3">4</div>
        <div className="bg-red-300 p-3">4</div>
      </div>

      {/* Dark Mode */}
      <div class="bg-green-900 text-black dark:bg-black dark:text-white">Hello</div>
    </>
  );
}

export default Tailwind;
