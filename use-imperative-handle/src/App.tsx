import { useEffect, useRef } from "react";

import Counter, { CounterRef } from "./Counter";
import TextInput, { TextInputRef } from "./TextInput";
/**
 * !useImperative handle:
 * Expose functions from child to parent.
 * Useful when lifting the state is not possible.
 *
 */
function App() {
  const counterRef = useRef<CounterRef>(null);
  const inputRef = useRef<TextInputRef>(null);

  /** 
   Why useEffect to log refs?
   -> Initially the exposed refs won't be attached to the elements. So, we need useEffect to log the refs after the initial render.  
   * */
  useEffect(() => {
    console.log(counterRef.current);
    console.log(inputRef.current);
  }, []);
  return (
    <>
    {/* Default Example: */}
      <Counter ref={counterRef} />
      <button onClick={() => counterRef.current?.reset()}>
        Reset from parent
      </button>
      {/* Local ref example:  */}
      <div>
        <TextInput placeholder="type..." ref={inputRef} />
        <button onClick={() => inputRef.current?.reset()}>
          Reset Input from parent
        </button>
      </div>
    </>
  );
}

export default App;
