import { useState } from "react";
import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
  // Pass a function to useState
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      return null;
    }
  });
  
  const [loggedIn, setLoggedIn] = useState(!!user); // Bonus: set loggedIn based on user existence

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;