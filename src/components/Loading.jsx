import React from "react";
import { DNA, InfinitySpin, MagnifyingGlass } from "react-loader-spinner";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { ShimmerDiv } from "shimmer-effects-react";

function Loading() {
  return (
    <div className="relative w-16 h-16">
      {/* <div className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full animate-spin"></div>
      <div className="absolute inset-2 border-4 border-transparent border-t-blue-300 border-r-blue-300 rounded-full animate-spin-reverse"></div> */}
     <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#e15b64"
  />
    </div>
  );
}

export default Loading;
