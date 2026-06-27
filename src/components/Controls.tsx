import React from 'react'

interface ControlsProps {
    toggleZoom: () => void;
    frameZoom: boolean;
}

const Controls = ({ toggleZoom, frameZoom }: ControlsProps) => {
  return (
    <div className="absolute top-3 right-3 space-x-2">
        <button className="text-2xk text-pink-400 cursor-pointer" onClick=
        {toggleZoom}>
            <i className={frameZoom ? 'bx bxs-zoom-out' : 'bx bxs-zoom-in'}></i>
        </button>
        <button className="text-2xk text-pink-400 cursor-pointer">
            <i className="bx bxs-x-circle"></i>
        </button>
    </div>
  )
}

export default Controls