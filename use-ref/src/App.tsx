import { useEffect, useRef, useState } from "react";
import "./App.css";

/**
 * ! Ref:
 * Ref is similar to a state,but doesn't cause a re-render.
 * It persist values between re-renders.
 *
 */

function App() {
  return (
    <>
      <Demo />
      <Demo2 />
    </>
  );
}

export default App;

//! using ref as a value:
function Demo() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    /**
     * setCount triggers a re-render but the new state value won't be available until the next render.
     * The console.log shows the previous state value because state updates are asynchronous.
     * Refs update synchronously and don't trigger re-renders, so countRef.current shows the new value immediately.
     */
    setCount(count + 1);
    countRef.current++;
    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };
  return (
    <div>
      count: {countRef.current}
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

//! using ref with input elements:
function Demo2() {
  const inputRef = useRef<HTMLInputElement | null>(null); // in this case ref stores the entire input element.

  useEffect(() => {
    console.log(inputRef.current); // going to log the input element
    inputRef.current?.focus(); // focus input as soon as component renders
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type Something..." />
    </div>
  );
}
