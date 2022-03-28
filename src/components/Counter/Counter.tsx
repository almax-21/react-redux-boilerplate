import React, { FC } from 'react';

import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import { decrement, increment } from '../../store/slices/counterSlice';

export const Counter: FC = () => {
  const { count } = useTypedSelector((state) => state.counter);

  const dispatch = useTypedDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  return (
    <>
      <div className="counter">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div className="counter__btn-group">
          <button className="counter__btn" onClick={handleIncrement}>
            +
          </button>
          <button className="counter__btn" onClick={handleDecrement}>
            -
          </button>
        </div>
      </div>
    </>
  );
};
