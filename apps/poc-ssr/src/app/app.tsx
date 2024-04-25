import React from 'react';

export function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div>Sample SSR Application</div>
      <div>Current Count: {count}</div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count
        </button>
      </div>
    </div>
  );
}

export default App;
