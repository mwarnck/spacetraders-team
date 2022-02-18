import { useState } from 'react';
import Button from '../components/Button.js';

export default function ShipsPage({ token }) {
  const [availableShips, setAvailableShips] = useState([]);

  return (
    <main>
      <h1>Available Ships</h1>
      <Button handleClick={getAvailableShips}>Show available Ships</Button>
      {availableShips &&
        availableShips.map(ship => (
          <>
            <dl>
              <dt>Class:</dt>
              <dd>{ship.class}</dd>
              <dt>Manufacturer:</dt>
              <dd>{ship.manufacturer}</dd>
              <dt>Max. Cargo:</dt>
              <dd>{ship.maxCargo}</dd>
              <dt>Speed:</dt>
              <dd>{ship.speed}</dd>
              <dt>Weapons:</dt>
              <dd>{ship.weapons}</dd>
              <dt>Purchase Location:</dt>
              <dd>{ship.purchaseLocations[0].location}</dd>
              <dt>Price:</dt>
              <dd>{ship.purchaseLocations[0].price}</dd>
            </dl>
            <br />
          </>
        ))}
    </main>
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
