"use client";

import { useState } from "react";
import "@styles/index.scss";

//  Functions
import { move, left, right } from "../_functions";

// Types
import { FaceTypes } from "../types";

//  Components
import Nav from "@components/nav";
import Grid from "@components/grid";
import Header from "@components/header";

const App = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [face, setFace] = useState<FaceTypes>(FaceTypes.n);

  const handleSubmit = (face: FaceTypes, x: number, y: number) => {
    const output = move(face, x, y);
    if (output) {
      setPos({ x: output.x, y: output.y });
    }
    return;
  };
  const handleLeftMove = () => {
    const output = left(face) as FaceTypes;
    setFace(output);
  };

  const handleRightMove = () => {
    const output = right(face) as FaceTypes;
    setFace(output);
  };

  return (
    <div className="App">
      <Header />
      <Grid face={face} pos={pos} />
      <Nav
        face={face}
        pos={pos}
        handleLeft={handleLeftMove}
        handleRight={handleRightMove}
        handleMove={handleSubmit}
      />
    </div>
  );
};

export default App;
