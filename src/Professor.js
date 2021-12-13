import React, { useEffect, useState } from 'react';
import './app.css'
import fire from 'firebase'
import HeroProf from './components/HeroProf'
import LoginProf from './components/LoginProf'

const App = () => {//i const

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEamilError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('false');
  
    const entradasCorretas = () => {
      setEmail('');
      setPassword('');
    }
  
    const entradasErradas = () => {
      setPasswordError('');
      setEamilError('');
    }
  
    const handleLogin = () => {/**login */
      entradasErradas();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          switch (err.code) {
            case "auth/invalide-email":
            case "auth/user-disable":
            case "auth/user-not-found":
              setEamilError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
          }
        });
    };
  
  
    const handleSignup = () => {/**cadastro */
      entradasErradas();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEamilError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
    };
  
    const handleLogout = () => {
      fire.auth().signOut();
    };
  
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if (user) {
          entradasCorretas();
          setUser(user);
        } else {
          setUser("");
        }
      });
    };
  
    useEffect(() => {
      authListener();
    }, [])
  
  
    return (
      <div className="App">
        {user ? (
          <HeroProf handleLogout={handleLogout} />
        ) : (
  
          <LoginProf
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </div>
    );
  }//final const
  
  export default App;