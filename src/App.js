import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import ShipsPage from './pages/ShipsPage.js';
import UserStatusPage from './pages/UserStatusPage.js';
import MarketPage from './pages/MarketPage.js';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState(loadFromLocal('token'));
  const [user, setUser] = useState(null);
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);
  const [currentShip, setCurrentShip] = useState({});
  console.log(currentShip);

  useEffect(() => {
    saveToLocal('token', token);
    if (token && !user) {
      getUserInfo(token);
    }
  }, [user, token]);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <UserStatusPage
              onLogin={loginUser}
              user={user}
              isUsernameTaken={isUsernameTaken}
              token={token}
              getUserInfo={getUserInfo}
            />
          }
        />
        <Route
          path="/ships"
          element={<ShipsPage token={token} buyShip={buyShip} />}
        />
        <Route path="/market" element={<MarketPage />} />
      </Routes>
    </div>
  );

  async function loginUser(username) {
    setIsUsernameTaken(false);

    const response = await fetch(
      `https://api.spacetraders.io/users/${username}/claim`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setToken(data.token);
      setUser(data.user);
    } else {
      setIsUsernameTaken(true);
    }
  }

  async function getUserInfo(token) {
    try {
      const response = await fetch(
        'https://api.spacetraders.io/my/account?token=' + token
      );
      const data = await response.json();
      setUser(data.user);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  async function buyShip() {
    console.log('hallo');
    const response = await fetch(
      `https://api.spacetraders.io/my/ships?token=${token}&location=OE-PM-TR&type=JW-MK-I`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setCurrentShip(data.ship);
      console.log(data);
      getUserInfo();
    } else {
      console.log('Try again!');
    }
  }

  function saveToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  function loadFromLocal(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;

// https://api.spacetraders.io/my/ships?token=5c6efebf-1461-47ec-9fd0-21bb418bc089&location=OE-PM-TR&type=JW-MK-I
