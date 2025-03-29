import { useReducer } from "react";
import "./App.css";

/**
 *
 * Follows the redux way of managing state.
 * Manage state with the help of type.
 * 
 * Reducer fun -> state , Action -> {type, payload} -> depending on type we perform logic on state
 * 
 * We pass reducer function and initial state to the useReducer hook -> we get state and a dispatch function to pass the action. 
 *
 */

type State = {
  count: number;
  error: string | null;
};

type Action = {
  type: "increment" | "decrement";
  // we can also pass a payload i.e. a value.
};

// !Reducer function to manage the state 
function reducer(state: State, action: Action) {
  const { type } = action;
  switch (type) {
    //! Normal state update:
    // case "increment": {
    //   return { ...state, count: state.count + 1 };
    // }
    // case "decrement": {
    //   return { ...state, count: state.count - 1 };
    // }

    //! Adding some logic to the state:
    case "increment": {
      {
        const newCount = state.count + 1;
        const hasError = newCount > 5;
        return {
          ...state,
          count: hasError ? state.count : newCount,
          error: hasError ? "maximum count reached" : null,
        };
      }
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum value reached!" : null,
      };
    }
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      {state.error && <p>Error: {state.error}</p>}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default App;
