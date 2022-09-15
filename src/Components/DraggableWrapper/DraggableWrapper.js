import React, { useState } from "react";
import Draggable from "react-draggable";

function DraggableWrapper({ children, id }) {
  const position = JSON.parse(localStorage.getItem(`component${id}`));

  let localPosition = { x: 0, y: 0 };
  if (position) {
    localPosition = { x: position.x, y: position.y };
  }

  const [activeDrag, setActiveDrag] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: localPosition.x,
      y: localPosition.y,
    },
  });

  const [zInd, setZInd] = useState(0);

  const dragHandlers = { onStart: onStart, onStop: onStop, onDrag: onDrag };

  function onStart() {
    console.log("Start");
    const commonIndex = JSON.parse(localStorage.getItem("commonIndex"));
    let localIndex = 0;
    if (commonIndex) {
      localIndex = commonIndex;
    }
    const saveGlobalIndex = localIndex + 1;
    localStorage.setItem("commonIndex", JSON.stringify(saveGlobalIndex));
    setZInd(saveGlobalIndex);
    setActiveDrag({ ...activeDrag, activeDrags: activeDrag.activeDrags + 1 });
  }
  function onStop() {
    console.log("Stop");
    setActiveDrag({ ...activeDrag, activeDrags: activeDrag.activeDrags - 1 });
  }
  function onDrag(e, ui) {
    console.log("Drag");
    const { x, y } = activeDrag.deltaPosition;
    setActiveDrag({
      ...activeDrag,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });

    localStorage.setItem(
      `component${id}`,
      JSON.stringify({ x: x + ui.deltaX, y: y + ui.deltaY })
    );
  }

  return (
    <Draggable
      {...dragHandlers}
      position={{
        x: activeDrag.deltaPosition.x,
        y: activeDrag.deltaPosition.y,
      }}
    >
      <div style={{ position: "relative", zIndex: zInd }}>{children}</div>
    </Draggable>
  );
}

export default DraggableWrapper;
