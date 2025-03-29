import { ReactNode, useState } from "react";
import { User } from "./App";
import { UserContext } from "./userContext";

type Props = {
  children: ReactNode;
};
// * custom context provider 
function UserContextProvider({ children }: Props) {
  const [user] = useState<User>({
    name: "Robert",
    age: 18,
  });
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
