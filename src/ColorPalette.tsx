import React, { useState } from "react";
import "./ColorPalette.css";

export function ColorPalette() {
  const [selectedColor, setSelectedColor] = useState("white");
  return (
    <section className="color-palette">
      <div
        className="drop-zone"
        style={{ backgroundColor: selectedColor }}
        onDrop={(ev) => setSelectedColor(ev.dataTransfer.getData("color"))}
        onDragOver={(ev) => ev.preventDefault()}
      >
        Change my color!
      </div>
      <div className="palette">
        <ul>
          <DraggableColor color="#FF0000">Red</DraggableColor>
          <DraggableColor color="#00FF00">Green</DraggableColor>
          <DraggableColor color="#0000FF">Blue</DraggableColor>
        </ul>
      </div>
    </section>
  );
}

function DraggableColor({
  color,
  children,
}: React.PropsWithChildren<{ color: string }>) {
  return (
    <li
      draggable
      onDragStart={(ev) => ev.dataTransfer.setData("color", color)}
      data-color={color}
      style={{ backgroundColor: color }}
    >
      {children}
    </li>
  );
}
