import React, { useRef, useEffect, useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ catPosition, catRotation, onBoundariesSet }) {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      const { offsetWidth, offsetHeight } = previewRef.current;
      // Set the boundaries based on preview area's dimensions
      onBoundariesSet({ width: offsetWidth, height: offsetHeight });
    }
  }, [onBoundariesSet]);

  return (
    <div
      ref={previewRef}
      className="flex-none h-full overflow-hidden p-2"
      style={{
        position: "relative",
        width: "500px", // set fixed width
        height: "500px", // set fixed height
        border: "1px solid #ccc",
      }}
    >
      <div className="flex-none h-full overflow-y-auto p-2">
        <CatSprite position={catPosition} rotation={catRotation} />
      </div>
    </div>
  );
}
