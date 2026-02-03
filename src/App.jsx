import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Simple Counter</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        -
      </button>
      <button
       onClick={() => setCount(0)}
      style={{ marginLeft: "10px" }}
        >
  Reset
</button>

    </div>
  );
}

export default App;
