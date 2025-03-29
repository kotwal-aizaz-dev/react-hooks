import { forwardRef, Ref, useImperativeHandle, useState } from "react";

//! useImperative handle:
type CounterProps = unknown //placeholder type for props 

// type for the ref that we will modify and pass back to the parent. 
export type CounterRef = {
  reset: () => void;
};


const Counter = forwardRef(function Counter(_props:CounterProps, ref: Ref<CounterRef>) {
    // state 
  const [count, setCount] = useState(0);

//   utils 
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };

//   method we want to expose to the parent
  const reset = () => {
    setCount(0);
  };

//  returns an object that has methods to attach to the ref that we will pass back to the parent.
  useImperativeHandle(ref, () => ({
    reset,
  }));

//   JSX
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
});

export default Counter;
