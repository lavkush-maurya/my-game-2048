"use client";
import React from "react";

const TitleAndScore = ({ Score }) => {
  return (
    <div className="header">
      <h1 className="title">2048</h1>
      <div className="score">
        <p>score</p>
        <p className="number">{Score}</p>
      </div>
    </div>
  );
};

export default TitleAndScore;
