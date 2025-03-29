import { useMemo, useState } from "react";

import "./App.css";

/**
 * useMemo: 
 * It's used to memoize a value returned by a cpu/memory extensive function. 
 * Avoid re-calculation of value during re-renders.  
 */


// creating an array of size 29_99_999.
// filling the array with 0s.
// looping through the array to return an array of objects.
const initialItems = new Array(29_999_999).fill(0).map((_, i) => ({
  id: i,
  isSelected: i === 29_999_998,
}));

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  // As finding the selected item is a cpu extensive operation, it's better to memoize/cache it's value. So, we don't have to re-calculate it on every render. We are going to recalculate this only if the items changes.
  const selectedItem = useMemo(() => {
    console.log("Expensive operation!");
    return items.find((item) => item.isSelected);
  }, [items]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Selected Item: {selectedItem?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
