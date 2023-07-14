"use client";

import React from "react";

import Tile from "./Tile";

const Row = ({ rowState }) => {
  const renderTiles = () => {
    return rowState.map((item, i) => {
      return <Tile key={i} number={item} />;
    });
  };

  return <div className="row">{renderTiles()}</div>;
};

export default Row;
