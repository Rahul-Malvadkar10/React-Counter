import React, { useState } from 'react';
import './style.css';  // Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button className="increment" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
