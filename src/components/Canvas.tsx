import React, { useRef, useState, useEffect } from "react";

const Canvas = ({ canvasSize = 500, pixelSize = 5 }) => {
  const canvasRef = useRef(null);
  const [grid, setGrid] = useState(
    Array.from({ length: canvasSize / pixelSize }, () =>
      Array.from({ length: canvasSize / pixelSize }, () => "#ffffff")
    )
  );
  const [currentColor, setCurrentColor] = useState("#000000");

  // Draw the grid on the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Clear the canvas
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    // Draw pixels
    grid.forEach((row, rowIndex) => {
      row.forEach((color, colIndex) => {
        ctx.fillStyle = color;
        ctx.fillRect(
          colIndex * pixelSize,
          rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );
        ctx.strokeStyle = "#ccc"; // Grid lines
        ctx.strokeRect(
          colIndex * pixelSize,
          rowIndex * pixelSize,
          pixelSize,
          pixelSize
        );
      });
    });
  }, [grid, canvasSize, pixelSize]);

  // Handle mouse click on canvas
  const handleCanvasClick = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const colIndex = Math.floor(x / pixelSize);
    const rowIndex = Math.floor(y / pixelSize);

    // Update the color of the clicked pixel
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = currentColor;
    setGrid(newGrid);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Pixel Editor</h1>
      <canvas
        ref={canvasRef}
        width={canvasSize}
        height={canvasSize}
        onClick={handleCanvasClick}
        style={{
          border: "1px solid black",
          cursor: "pointer",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <label>
          Pick Color:
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default Canvas;