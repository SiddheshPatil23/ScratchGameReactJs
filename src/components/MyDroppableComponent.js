import React from 'react';
import { useDrop } from 'react-dnd';

const MyDroppableComponent = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'ITEM', // The type of draggable item this drop target accepts
    drop: (item) => console.log(`Dropped item: ${item.id}`), // Handle the drop event
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '200px',
        width: '200px',
        border: '2px dashed gray',
        backgroundColor: isOver ? (canDrop ? 'lightgreen' : 'lightcoral') : 'white',
      }}
    >
      {canDrop ? 'Release to drop' : 'Drag item here'}
    </div>
  );
};

export default MyDroppableComponent;
