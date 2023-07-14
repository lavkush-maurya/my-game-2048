"use client";
import React from "react";

const Tile = ({ number }) => {
  return (
    <div className={`tile color-${number}`}>
      {number > 0 ? 2 ** number : ""}
    </div>
  );
};

export default Tile;
