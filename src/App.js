import React from "react";
import LikeButton from "./components/LikeButton";
import Heart from "./components/Heart";
import Gugudan from "./components/Gugudan";
import Gugudan2 from "./components/Gugudan2";

const App = () => {
  return (
    <>
      <LikeButton />
      <div>Heart Button</div>
      <Heart />
      <h3>구구단</h3>
      <Gugudan />
      <h3>구구단</h3>
      <Gugudan2 />
    </>
  );
};

export default App;
