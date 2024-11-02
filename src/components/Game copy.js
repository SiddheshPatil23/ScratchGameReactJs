import React, { useState } from "react";
import Sidebar from "./Sidebar";
import PreviewArea from "./PreviewArea";
import MidArea from "./MidArea";

export default function Game() {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [catRotation, setCatRotation] = useState(0);

  const moveCat = () => {
    setCatPosition((prevPosition) => ({
      ...prevPosition,
      x: prevPosition.x + 10 * Math.cos((catRotation * Math.PI) / 180), 
      y: prevPosition.y + 10 * Math.sin((catRotation * Math.PI) / 180),
    }));
  };

  const turnCatLeft = () => {
    setCatRotation((prevRotation) => prevRotation - 15);
  };

  const turnCatRight = () => {
    setCatRotation((prevRotation) => prevRotation + 15);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar
            moveCat={moveCat} 
            turnCatLeft={turnCatLeft} 
            turnCatRight={turnCatRight}
          /> 
          <MidArea 
            moveCat={moveCat}
            turnCatLeft={turnCatLeft}
            turnCatRight={turnCatRight}
          />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea 
            catPosition={catPosition}
            catRotation={catRotation}
          />
        </div>
      </div>
    </div>
  );
}
