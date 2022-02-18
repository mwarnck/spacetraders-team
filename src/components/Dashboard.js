export default function Dashboard({ user, currentLoans }) {
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
              Ship 1
              <ul>
                <li>Type: </li>
                <li>Manufacturer: </li>
                <li>Current cargo: </li>
                <li>Max cargo: </li>
                <li>Available space: </li>
                <li>Location: </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
