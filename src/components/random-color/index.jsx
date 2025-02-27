import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTyepOfColor] = useState("hex");
  const [color, SetColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    SetColor(hexColor);
    setTyepOfColor("hex");
  }
  function handleCreateRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    SetColor(`rgb(${r},${g},${b})`);
    setTyepOfColor("rgb");
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => handleCreateHexColor()}>Create HEX Color</button>
      <button onClick={() => handleCreateRgbColor()}>Create RGB color</button>

      <div>
        <h3>{typeOfColor}</h3>
        <h3>{color}</h3>
      </div>
    </div>
  );
}
