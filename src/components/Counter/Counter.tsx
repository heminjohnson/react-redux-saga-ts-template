import React from 'react';

interface ICounterProps {
  value?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}
const Counter: React.FC<ICounterProps> = ({
  value,
  onIncrement,
  onDecrement,
}): JSX.Element => {
  return (
    <div>
      <button onClick={onIncrement} className="button">
        + Increment
      </button>{' '}
      <button onClick={onDecrement} className="button">
        - Decrement
      </button>
      <hr />
      <div>Clicked: {value} times</div>
    </div>
  );
};

export default Counter;
