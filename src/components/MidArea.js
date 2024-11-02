import React, { useState } from "react";
import { useDrop } from "react-dnd"; // Import useDrop

export default function MidArea({ moveCat, turnCatLeft, turnCatRight }) {
  // State to hold the queued actions
  const [actionQueue, setActionQueue] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "ACTION", // Accept items of type 'ACTION'
    drop: (item) => {
      // Add the dropped item to the action queue instead of executing it immediately
      setActionQueue((prevQueue) => [...prevQueue, item.type]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // Function to execute actions in the queue
  const executeActions = async () => {
    for (const action of actionQueue) {
      if (action === "move") {
        moveCat();
      } else if (action === "turnLeft") {
        turnCatLeft();
      } else if (action === "turnRight") {
        turnCatRight();
      }
      // Optional: Add a delay between actions for better visualization
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    // Clear the queue after executing actions
    setActionQueue([]);
  };

  return (
    <div
      ref={drop}
      className="flex-1 h-full overflow-auto border border-gray-200"
      style={{
        backgroundColor: isOver ? (canDrop ? "lightgreen" : "lightcoral") : "white",
      }}
    >
      <div>{"Mid Area - Drop actions here"}</div>
      <button
        onClick={executeActions}
        className="mt-2 p-2 bg-blue-500 text-white"
        disabled={actionQueue.length === 0} // Disable button if queue is empty
      >
        Play Actions
      </button>
      <div>
        {/* Optional: Display queued actions */}
        <h3>Queued Actions:</h3>
        <ul>
          {actionQueue.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
