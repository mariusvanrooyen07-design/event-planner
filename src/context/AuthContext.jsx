import { createContext, useState } from "react"
import { saveToStorage, loadFromStorage } from "../utils/storage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(loadFromStorage('users', []));
  const [currentUser, setCurrentUser] = useState(loadFromStorage('currentUser', null));

  function register(name, email, username, password) {
    const id = `u_${Date.now()}`;
    const newUser = { id, name, email, username, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveToStorage('users', updatedUsers);
  }
  
  function login(username, password) {
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setCurrentUser(userFound);
      saveToStorage('currentUser', userFound);
      return true;
    } 
    return false;
  }
  
  function logout() {
    setCurrentUser(null);
    saveToStorage('currentUser', null);
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};