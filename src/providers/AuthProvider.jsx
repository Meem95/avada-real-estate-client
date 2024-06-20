import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//           // get token and store client
//           const userInfo = { email: currentUser.email };
//           try {
//               const res = await axiosPublic.post('/jwt', userInfo);
//               if (res.data.token) {
//                   localStorage.setItem('access-token', res.data.token);
//               }
//           } catch (error) {
//               console.error('Error fetching token:', error);
//           } finally {
//               setLoading(false);
//           }
//       } else {
//           // Remove token if not logged in
//           localStorage.removeItem('access-token');
//           setLoading(false);
//       }
    
//     });
//     return () => unsubscribe();
//   }, [axiosPublic]);



useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser);
          console.log("curent user",currentUser);
          const userInfo={
              email:currentUser?.email
          }
          if (currentUser) {
              axiosPublic.post("/jwt",userInfo)
              .then(res=>{
                  if (res.data.token) {
                      localStorage.setItem("access_token",res.data.token)
                      setLoading(false)
                  }
              })
          }
          else{
              localStorage.removeItem("access_token")
              setLoading(false)
          }
          
  
      });
      return ()=>{
          unsubscribe
      }
  },[axiosPublic])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
