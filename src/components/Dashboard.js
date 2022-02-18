export default function Dashboard({ user }) {
  return (
    <section>
      <h2>{user.username}</h2>
      <ul>
        <li>Credits: {user.credits}</li>
        <li>
          Current loans:
          <ul>
            <li>Type: </li>
            <li>Due date: </li>
            <li>Repayment amount: </li>
            <li>Status: </li>
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

/* <dl>
  <dt>Username:</dt>
  <dd>{user.username}</dd>
  <dt>Credits:</dt>
  <dd>{user.credits}</dd>
  <dt>Current loans:</dt>
  <dd>{user.credits}</dd>
  <dt>Available ships:</dt>
  <dd>{user.credits}</dd>
</dl>; */
