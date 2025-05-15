export const HomeScreen = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={styles.homescreen}>
      <h2>¡Iniciaste sesión!</h2>
      <button style={styles.logoutButton} onClick={handleLogout}>
        🚪 Cerrar sesión
      </button>
    </div>
  );
};

const styles = {
  homescreen: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
  },
  logoutButton: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default HomeScreen;