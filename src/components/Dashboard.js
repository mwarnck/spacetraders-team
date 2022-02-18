import styled from 'styled-components';

export default function Dashboard({ user, currentLoans, currentShip }) {
  return (
    <DashboardContainer>
      <h2>{user.username}</h2>
      <div>
        <h3>Credits:</h3>
        <p>{user.credits} $</p>
      </div>
      <div>
        <h3>Current loans:</h3>
        <ListContainer>
          <li>Type: {currentLoans.type} </li>
          <li>Due date: {currentLoans.due}</li>
          <li>Repayment amount: {currentLoans.repaymentAmount} $</li>
          <li>Status: {currentLoans.status} </li>
        </ListContainer>
      </div>
      <div>
        <h3>Owned ships:</h3>
        <p>Ship: {currentShip.type}</p>
        <ListContainer>
          <li>Manufacturer: {currentShip.manufacturer}</li>
          <li>Current cargo: {currentShip.cargo}</li>
          <li>Max cargo: {currentShip.maxCargo}</li>
          <li>Available space: {currentShip.spaceAvailable}</li>
          <li>Location: {currentShip.location}</li>
          <li>Weapons: {currentShip.weapons}</li>
        </ListContainer>
      </div>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.section`
  display: grid;
  gap: 5px;
  padding: 10px 0 10px 25px;
  border: 0.5px dotted orange;
  border-radius: 5px;
  margin-bottom: 10px;

  h2 {
    color: crimson;
  }

  h3 {
    margin: 0;
    color: goldenrod;
  }
`;

const ListContainer = styled.ul`
  list-style-type: gurmukhi;
`;
