import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const LoginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  //Login with GitHub
  const LoginWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, new GithubAuthProvider());
  };
  //Login with Email
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //Logout
  const LogOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  //Register new user
  const Register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Username & Photo
  const UpdateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //CurrentUser
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const AuthInfo = {
    User,
    LoginWithGoogle,
    LogOut,
    Login,
    Register,
    loading,
    UpdateUser,
    LoginWithGitHub,
  };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
