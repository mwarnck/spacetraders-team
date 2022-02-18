import { useState } from 'react';
import Button from '../components/Button.js';
import styled from 'styled-components';

export default function ShipsPage({ token, buyShip }) {
  const [availableShips, setAvailableShips] = useState([]);

  return (
    <PageContainer>
      <h1>Available Ships</h1>
      <Button handleClick={getAvailableShips}>Show available Ships</Button>
      {availableShips &&
        availableShips.map(ship => (
          <>
            <ShipContainer>
              <h3>Class:</h3>
              <p>{ship.class}</p>
              <h3>Manufacturer:</h3>
              <p>{ship.manufacturer}</p>
              <h3>Max. Cargo:</h3>
              <p>{ship.maxCargo}</p>
              <h3>Speed:</h3>
              <p>{ship.speed}</p>
              <h3>Weapons:</h3>
              <p>{ship.weapons}</p>
              <h3>Purchase Location:</h3>
              <p>{ship.purchaseLocations[0].location}</p>
              <h3>Price:</h3>
              <p>{ship.purchaseLocations[0].price}</p>
              <Button handleClick={buyShip}>Buy Ship</Button>
            </ShipContainer>

            <br />
          </>
        ))}
    </PageContainer>
  );

  async function getAvailableShips() {
    try {
      const response = await fetch(
        'https://api.spacetraders.io/systems/OE/ship-listings?token=' + token
      );
      const data = await response.json();
      setAvailableShips(data.shipListings);
    } catch (error) {
      console.error('ERROR:', error);
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

const ShipContainer = styled.section`
  display: grid;
  gap: 5px;
  padding: 10px 0 10px 25px;
  border: 0.5px dotted orange;
  border-radius: 5px;

  h3 {
    margin: 0 0 -15px 0;
    color: goldenrod;
  }
`;
