export default function Dashboard({ user, currentLoans, currentShip }) {
  return (
    <section>
      <h2>{user.username}</h2>
      <ul>
        <li>Credits: {user.credits}</li>
        <li>
          Current loans:
          <ul>
            <li>Type: {currentLoans.type} </li>
            <li>Due date: {currentLoans.due}</li>
            <li>Repayment amount: {currentLoans.repaymentAmount}$</li>
            <li>Status: {currentLoans.status} </li>
          </ul>
        </li>
        <li>
          Owned ships
          <ul>
            <li>
              Ship: {currentShip.type}
              <ul>
                <li>Manufacturer: {currentShip.manufacturer}</li>
                <li>Current cargo: {currentShip.cargo}</li>
                <li>Max cargo: {currentShip.maxCargo}</li>
                <li>Available space: {currentShip.spaceAvailable}</li>
                <li>Location: {currentShip.location}</li>
                <li>Weapons: {currentShip.weapons}</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
