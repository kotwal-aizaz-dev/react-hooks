import {
  // useContext,
  // useState,
} from "react";
import "./App.css";
import { 
  // UserContext, 
  useUserContext } from "./userContext";
import UserContextProvider from "./UserContextProvider";

export type User = {
  name: string;
  age: number;
};

/**
 * context:
 * Basic state management solution to avoid prop drilling.
 *
 */
function App() {
  // const [user] = useState<User>({
  //   name: "Robert",
  //   age: 18,
  // });

  return (
    <div>
      {/* <UserContext.Provider value={undefined}> */
      /** //!This will throw an error as we have custom context hook that checks for undefined value.  */}
      {/* <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider> */}
      {/* //*Optimal way of using context */}
      {/* //? Ref -> https://youtu.be/16yMmAJSGek */}
      {/* //! It is better to have a custom context provider to avoid unnecessary re-rendering of the components that are not consuming the context.  */}
      <UserContextProvider>
        <Dashboard />
      </UserContextProvider>
    </div>
  );
}

export default App;

function Dashboard() {
  return (
    <div>
      <Profile />
    </div>
  );
}

function Profile() {
  // consuming context without any custom logic
  // const user = useContext(UserContext)

  // consuming custom context hook that checks if the user is undefined
  const user = useUserContext();
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
