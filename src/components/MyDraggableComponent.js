import React from 'react';
import { useDrag } from 'react-dnd';

const MyDraggableComponent = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM', // Define the type of the draggable item
    item: { id: 1 }, // This can be any data you want to pass to the drop target
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '16px',
        border: '1px solid gray',
      }}
    >
      Drag Me
    </div>
  );
};

export default MyDraggableComponent;
