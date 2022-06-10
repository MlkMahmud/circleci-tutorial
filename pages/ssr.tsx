import React from 'react';


export default function Users({ users }: any) {
  return (
    <div>
      <p>Users</p>
      <ul>
      {users.map(user => (
        <li
          key={user.id}
        >
          {user.name}
        </li>
      ))}
    </ul>
    </div>
  );
}


export async function getServerSideProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: { users }
  }
}