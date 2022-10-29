import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
export const AuthContext = React.createContext();

// This will provide a level of abstraction in which any component/children in AuthProvider can access it through value(store).
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut() {
    return auth.signOut();
  }

  // Setting user using onAuthStateChanged function
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsub(); //clean-up function.
    };
  });

  const store = {
    currentUser,
    signUp,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={store}>
      {console.log("AuthContext.Provider Running")}
      {!loading && children}
    </AuthContext.Provider>
  );
}
