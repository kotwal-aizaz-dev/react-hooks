import { useDeferredValue, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("test");
  //! useDeferred hook: 
  // A deferred value that will lag behind in render to the original passed value. 
  // A  deferred value might not be same as the original value on every render. 
  // It only takes  primitive value. 
  // If passed a ref value like an object or an array then it will cause an infinite loop. 

  //! This is helpful for search as we don't want to send a request to the server with every typed word. 
  const deferredQuery = useDeferredValue(query)

  useEffect(() => {
    console.log("Query:", query)
    console.log("Deferred Query:", deferredQuery)
    console.log("__Render ends__")
  }, [query, deferredQuery])


  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <SlowList text={deferredQuery} />
    </>
  );
}

export default App;

function SlowList({ text }: { text: string }) {
  const items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul>{items}</ul>;
}

function SlowItem({ text }: { text: string }) {
  const startTime = performance.now(); //it gives the current time in seconds 
  while (performance.now() - startTime < 1) {
    // do nothing for 1ms
  }
  return <li>Text: {text}</li>;
}
