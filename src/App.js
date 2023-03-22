import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;

// four ways to wrap multiple elements up in order to return one
// <div></div> - but it create unnecessary div when we render it
// <customWrapper></customWrapper> - we need to create a component for it
// <React.Fragment></React.Fragment> - import React from "react"
// <Fragment></Fragment> - import { Fragment } from "react"
