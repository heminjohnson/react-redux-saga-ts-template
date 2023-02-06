import React from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { counterActions } from './redux/counter/slice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const { value } = useAppSelector((state) => state.counter);

  const increment = (): void => {
    dispatch(counterActions.increment());
  };

  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };

  const incrementAsync = (): void => {
    dispatch(counterActions.incrementAsync());
  };

  const decrementAsync = (): void => {
    dispatch(counterActions.decrementAsync());
  };

  return (
    <div className="app">
      <Counter
        onIncrement={increment}
        onDecrement={decrement}
        onIncrementAsync={incrementAsync}
        onDecrementAsync={decrementAsync}
        value={value}
      />
      react-redux-saga-ts
    </div>
  );
}

export default App;
