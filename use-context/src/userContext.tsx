import { createContext, useContext } from "react";
import { User } from "./App";

/**
 * !Why do we provide a default value?
 * -> If a component tries to use the context but there's no provider above it, it gets this starting value instead of nothing.
 */
// export const UserContext = createContext<User>({
//   name: "",
//   age: 18,
// });
export const UserContext = createContext<User | undefined>(undefined);

/**
 * You can add custom logic to the context using custom hook.
 *
 */
export function useUserContext() {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("No user passed to the context. User cannot be undefined!");
  }
  return user;
}
