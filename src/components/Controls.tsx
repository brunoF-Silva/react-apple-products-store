import React from "react";

interface ControlsProps {
  toggleZoom: () => void;
  frameZoom: boolean;
  resetPage: () => void;
  activePage: number;
}

const Controls = ({
  toggleZoom,
  frameZoom,
  resetPage,
  activePage,
}: ControlsProps) => {
  return (
    <div className="absolute top-3 right-3 space-x-2 z-10">
      <button
        className="text-2xk text-pink-400 cursor-pointer hidden lg:inline-block"
        onClick={toggleZoom}
      >
        <i className={frameZoom ? "bx bxs-zoom-out" : "bx bxs-zoom-in"}></i>
      </button>
      <button
        className={`text-2xk ${activePage === 0 ? "text-pink-200 cursor-not-allowed" : "text-pink-400 cursor-pointer"}`}
        onClick={resetPage}
      >
        <i className="bx bxs-x-circle"></i>
      </button>
    </div>
  );
};

export default Controls;
