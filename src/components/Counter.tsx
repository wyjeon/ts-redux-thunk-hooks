import React from 'react';
import useCounter from '../hooks/useCounter';

function Counter() {
  const { number, onIncrease, onDecrease } = useCounter();
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
