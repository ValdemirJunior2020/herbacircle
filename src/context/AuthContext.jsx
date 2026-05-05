// /src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const ref = doc(db, 'users', currentUser.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) setProfile({ uid: currentUser.uid, ...snap.data() });
        else {
          const newProfile = {
            uid: currentUser.uid,
            displayName: currentUser.displayName || 'HerbaCircle Member',
            email: currentUser.email,
            photoURL: currentUser.photoURL || '',
            bio: '',
            role: 'member',
            verificationStatus: 'none',
            profession: '',
            credentialsSummary: '',
            createdAt: serverTimestamp()
          };
          await setDoc(ref, newProfile);
          setProfile(newProfile);
        }
      } else setProfile(null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  async function signup(displayName, email, password) {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(credential.user, { displayName });
    const userProfile = {
      uid: credential.user.uid,
      displayName,
      email,
      photoURL: '',
      bio: '',
      role: 'member',
      verificationStatus: 'none',
      profession: '',
      credentialsSummary: '',
      createdAt: serverTimestamp()
    };
    await setDoc(doc(db, 'users', credential.user.uid), userProfile);
    setProfile(userProfile);
  }

  function login(email, password) { return signInWithEmailAndPassword(auth, email, password); }
  function logout() { return signOut(auth); }

  const value = useMemo(() => ({ user, profile, loading, signup, login, logout, isAdmin: profile?.role === 'admin' }), [user, profile, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() { return useContext(AuthContext); }
