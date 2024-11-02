import React, { useState } from "react";
import { useDrop } from "react-dnd"; // Import useDrop

export default function MidArea({ moveCat, turnCatLeft, turnCatRight }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "ACTION", // Accept items of type 'ACTION'
    drop: (item) => {
      // Execute actions based on the type of the dropped item
      if (item.type === "move") {
        moveCat();
      } else if (item.type === "turnLeft") {
        turnCatLeft();
      } else if (item.type === "turnRight") {
        turnCatRight();
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  

  return (
    <div
      ref={drop}
      className="flex-1 h-full overflow-auto border border-gray-200"
      style={{
        backgroundColor: isOver ? (canDrop ? "lightgreen" : "lightcoral") : "white",
      }}
    >
      {"Mid Area - Drop actions here"}
    </div>
  );
}
