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


export async function getServerSideProps({ req }) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  console.log(req.headers);
  return {
    props: { users }
  }
}