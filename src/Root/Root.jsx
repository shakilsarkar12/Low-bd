import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AuthForm from "../pages/AuthForm/AuthForm";
import { Outlet, useLoaderData } from "react-router";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const titles = {
  "/": "Home | Low-BD",
  "/mybooking": "My Booking | Low-BD",
  "/lawers-details/:id": "My Booking | Low-BD",
  "/blogs": "Blogs | Low-BD",
  "/contact": "Error | Low-BD",
};
const Root = () => {
    const data = useLoaderData();
  const location = useLocation();

  useEffect(() => {
    const title = titles[location.pathname] || "Low-BD";
    document.title = title;
  }, [location.pathname]);

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      setUser(userCredential.user);
      setError("");
      toast.success("Account created successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogIn = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(userCredential.user);
      toast.success("Log In Successfull !")
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = async () => {
    await signOut(auth);
    setUser(null);
    setEmail("");
    setPassword("");
    setName("");
  };

  const provider = new GoogleAuthProvider();

  const handleGoogleAuth = () => {
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithPopup(auth, provider);
  })
  .then((result) => {
    const user = result.user;
    setUser(user);
    toast.success(`${user.displayName} You have logged in!`);
  })
  .catch((error) => {
    console.log(error);
  });

  };

  return (
    <div>
      <div className="mx-4 md:mx-8 lg:mx-14 xl:mx-20 2xl:max-w-10/12  2xl:mx-auto">
        <Navbar handleLogOut={handleLogOut} user={user} data={ data} />
        {user ? (
          <div className="min-h-[calc(90vh-64px)]">
            <Outlet />
          </div>
        ) : (
          <AuthForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            handleSignUp={handleSignUp}
            handleLogOut={handleLogOut}
            user={user}
            handleLogIn={handleLogIn}
            handleGoogleAuth={handleGoogleAuth}
          ></AuthForm>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Root;
