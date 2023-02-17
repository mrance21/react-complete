import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (name, age) => {
    setUsersList(prevList => {
      return [...prevList, { name, age, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
};

export default App;
