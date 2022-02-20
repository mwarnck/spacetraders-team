import { useState } from 'react';
import Button from '../components/Button.js';
import Dashboard from '../components/Dashboard.js';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage.js';

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
  const [currentLoans, setCurrentLoans] = useLocalStorage('currentLoans', {});

  return (
    <PageContainer>
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
                <LoanContainer>
                  <p>Amount: {loan.amount} $</p>

                  <p>Type: {loan.type}</p>
                </LoanContainer>
                <Button handleClick={takeLoan}>Take Loan</Button>
              </>
            ))}
        </>
      ) : (
        <FormContainer onSubmit={handleSubmit}>
          <label htmlFor="username">Please select a user name</label>
          <input
            required
            id="username"
            name="username"
            type="text"
            placeholder="e.g. neuefische"
          />
          {isUsernameTaken && <p>Username already taken!</p>}
          <Button>Login</Button>
        </FormContainer>
      )}
    </PageContainer>
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

const PageContainer = styled.main`
  display: grid;
  gap: 10px;

  h1 {
    text-align: center;
    color: lawngreen;
  }
`;

const LoanContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: space-evenly;

  p {
    border: 1px dotted orange;
    border-radius: 5px;
    padding: 15px;
  }
`;

const FormContainer = styled.form`
  display: grid;
  gap: 10px;
  align-content: center;

  input {
    color: cyan;
    opacity: 0.7;
    border-color: orange;
  }

  label {
    color: goldenrod;
  }
`;
