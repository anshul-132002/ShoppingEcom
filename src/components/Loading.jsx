import React from "react";

function Loading() {
  return (
   
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-transparent border-t-blue-300 border-r-blue-300 rounded-full animate-spin-reverse"></div>
      </div>
   
  );
}

export default Loading;
