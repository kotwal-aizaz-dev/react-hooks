import { 
  // useEffect,
   useLayoutEffect, useState } from "react";

import "./App.css";
const userIds = [1, 2];

/**
 * !useLayout effect hook: 
 * -> A hook that is similar to useEffect in syntax but runs your code right after the React updates the dom but before the browser draws it on screen. 
 * 
 * It runs synchronously. So, it block the render. i.e. blocks the browser from painting until it completes. 
 * 
 * !When to use?
 * Make visual changes that need to happen immediately. 
 * 
 * !Difference between useEffect and useLayout?
 * useEffect -> runs after the screen updates (asynchronously). 
 * useLayout -> runs before screen updates (synchronously).
 *  
 */
function App() {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  const now = performance.now();
  while (performance.now() - now < 200) {
    // do nothing for a bit
  }

  /**
   * Since we want to update isAdmin status immediately after userId changes,
   * we use useLayoutEffect to ensure visual consistency.
   * useLayoutEffect blocks rendering until both userId and isAdmin are updated,
   * preventing any flickering or visual lag that might occur with useEffect.
   */
  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  // useEffect(() => {
  //   setIsAdmin(userId === userIds[0]);
  // }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find((id) => id !== userId);
    if (otherId) setUserId(otherId);
  };
  return (
    <>
      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? "true" : "false"}</p>
      <button onClick={handleChange}>Change User</button>
    </>
  );
}

export default App;
