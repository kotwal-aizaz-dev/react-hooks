import { useState, memo, useCallback } from "react";

import "./App.css";

const allUsers = ["john", "alex"];

/**
 * !useCallback: 
 * used to memoize a function reference and return that memoized function. 
 * 
 */

function App() {
  const [users, setUsers] = useState(allUsers);
  const [count, setCount] = useState(0);

  // !Logic: 
  // React creates a new function reference on each render, even for identical functions.
  // This causes memoized components to re-render when receiving function props.
  // useCallback helps maintain the same function reference across renders.
  const handleSearch = useCallback(
    (text: string) => {
      const filteredUsers = users.filter((user) => user.includes(text));
      setUsers(filteredUsers);
    },
    [users] // create a new function reference if users change. 
  );

  //?JSX: 
  /**
   * With useCallback, 
   * Search component will no re-render while count changes. 
   */
  return (
    <>
      <h2>Count: {count}</h2>
      <Search onChange={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default App;

// !Search component: 
type SearchProps = {
  onChange: (text: string) => void;
};

const Search = memo(function ({ onChange }: SearchProps) {
  console.log("search !");
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
});
