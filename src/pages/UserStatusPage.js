import { useState, useEffect } from 'react';
import Button from '../components/Button.js';
import Dashboard from '../components/Dashboard.js';

export default function UserStatusPage({
  onLogin,
  user,
  isUsernameTaken,
  token,
  getUserInfo,
  currentShip,
  saveToLocal,
  loadFromLocal,
}) {
  const [availableLoans, setAvailableLoans] = useState([]);
  const [currentLoans, setCurrentLoans] = useState(
    loadFromLocal('currentLoans') ?? {}
  );

  useEffect(() => {
    saveToLocal('currentLoans', currentLoans);
  }, [currentLoans]);

  return (
    <main>
      <h1>Dashboard</h1>
      {user ? (
        <>
          <Dashboard
            user={user}
            currentLoans={currentLoans}
            currentShip={currentShip}
          />
          <Button handleClick={getAvailableLoans}>Show available Loans</Button>
          {availableLoans &&
            availableLoans.map(loan => (
              <>
                <dl>
                  <dt>Amount:</dt>
                  <dd>{loan.amount}</dd>
                  <dt>Type:</dt>
                  <dd>{loan.type}</dd>
                </dl>
                <Button handleClick={takeLoan}>Take Loan</Button>
              </>
            ))}
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Please select a user name</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            placeholder="e.g. neuefische"
          />
          {isUsernameTaken && <p>Username already taken!</p>}
          <button>Login</button>
        </form>
      )}
    </main>
  );

  async function getAvailableLoans() {
    try {
      const response = await fetch(
        'https://api.spacetraders.io/types/loans?token=' + token
      );
      const data = await response.json();
      setAvailableLoans(data.loans);
    } catch (error) {
      console.error('ERROR:', error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.username;
    onLogin(input.value);
  }

  async function takeLoan() {
    const response = await fetch(
      `https://api.spacetraders.io/my/loans?token=${token}&type=STARTUP`,
      {
        method: 'POST',
      }
    ).catch(error => {
      console.log('ERROR', error.message);
    });

    if (response.ok) {
      const data = await response.json();
      setCurrentLoans(data.loan);
      getUserInfo(token);
    } else {
      console.log('Try again!');
    }
  }
}
