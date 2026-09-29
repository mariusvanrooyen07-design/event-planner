import { createContext, useState } from "react"
import { saveToStorage, loadFromStorage } from "../utils/storage.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(loadFromStorage('users', []));
  const [currentUser, setCurrentUser] = useState(loadFromStorage('currentUser', null));

  // The register function adds the new user's information and stores it in localStorage.
  function register(name, email, username, password) {
    const id = `u_${Date.now()}`;
    const newUser = { id, name, email, username, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveToStorage('users', updatedUsers);
  }
  
  // The login function handles the login process, by checking if the username and password for the user is correct.
  function login(username, password) {
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    // If the users credentials match the current user is saved to local storage as the logged in user.
    // This allows the other pages to use this in context to show only that users events.
    if (userFound) {
      setCurrentUser(userFound);
      saveToStorage('currentUser', userFound);
      return true;
    }
    // If the users credentials don't match the current user is not saved.
    return false;
  }
  
  // The logout function removes the current user, thus logging out the current user.
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