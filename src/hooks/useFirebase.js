import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true); // user using the login functionality
  const [userName, setUserName] = useState(''); // firebase header name showing bug fix

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true); // user trying to login with google

    return signInWithPopup(auth, googleProvider);
  };

  const processSignUp = (email, password) => {
    //create user info when signing up
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const processEmailSignIn = (email, password) => {
    // sign in the existing user
    return signInWithEmailAndPassword(auth, email, password);
  };

  // change the user state after successfull login
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false); // as the user state changed so we are not in loading state
    });

    return () => unsubscribed;
  }, [auth]);

  const logout = () => {
    setIsLoading(true); // user is trying to log out.
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false)); // user is now logged out
  };

  //update user profile
  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  return {
    logout,
    user,
    setUser,
    isLoading,
    setIsLoading,
    error,
    setError,
    userName,
    setUserName,
    signInUsingGoogle,
    processSignUp,
    processEmailSignIn,
    updateUserProfile,
  };
};

export default useFirebase;
