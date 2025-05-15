import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <HomeScreen setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginScreen setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fff',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
};