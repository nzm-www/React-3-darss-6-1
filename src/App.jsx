import React, { useState } from "react";

function App() {
  const [counterState, setcounterState] = useState(0);

  // let counter = 0;

  function hendelIncrement() {
    setcounterState(counterState + 1);
  }
  function hendelDecrement() {
    setcounterState(counterState - 1);
  }
  console.log("ui qayta chizildi");

  return (
    <div className="all">
      <button onClick={hendelIncrement} type="button" class="button">
        <div class="button-top">3D Plus +</div>
        <div class="button-bottom"></div>
        <div class="button-base"></div>
      </button>
      <h1>{counterState}</h1>
      <button onClick={hendelDecrement} type="button" class="button">
        <div class="button-top">3D Minus -</div>
        <div class="button-bottom"></div>
        <div class="button-base"></div>
      </button>
    </div>
  );
}

export default App;
