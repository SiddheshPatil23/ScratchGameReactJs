import React from "react";
import { useDrag } from "react-dnd"; // Import useDrag
import Icon from "./Icon";

const DraggableAction = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ACTION", // Define the type of draggable item
    item: { type }, // Data to pass to the drop target
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
        padding: "8px",
        border: "1px solid gray",
        marginBottom: "4px",
      }}
    >
      {children}
    </div>
  );
};

export default function Sidebar({ moveCat, turnCatLeft, turnCatRight }) {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <DraggableAction type="event">{"When clicked"}</DraggableAction>
      <DraggableAction type="event">{"When this sprite clicked"}</DraggableAction>
      
      <div className="font-bold"> {"Motion"} </div>
      <DraggableAction type="move" onClick={moveCat}>
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={moveCat}>
          {"Move 10 steps"}
        </div>
      </DraggableAction>
      <DraggableAction type="turnLeft" onClick={turnCatLeft}>
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={turnCatLeft}>
          {"Turn "}
          <Icon name="undo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
      </DraggableAction>
      <DraggableAction type="turnRight" onClick={turnCatRight}>
        <div className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
        onClick={turnCatRight}>
          {"Turn "}
          <Icon name="redo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </div>
      </DraggableAction>
    </div>
  );
}
