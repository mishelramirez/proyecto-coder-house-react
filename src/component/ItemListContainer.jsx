import React from "react";

export default function ItemListContainer({ prop }) {
  //* Saco la prop
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <h2 className="itemList" style={{ backgroundColor: "white" }}>
        {prop}
        {
          //* Uso la prop
        }
      </h2>
    </div>
  );
}
