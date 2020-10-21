import React, { Fragment } from "react";
import UserItem from "./UserItem";

export default function UsersList(props) {
  if (props.users.length === 0) {
    return (
      <h1 style={{ textAlign: "center", color: "tomato", fontSize: "3rem" }}>
        No Users Found
      </h1>
    );
  }
  return (
    <Fragment>
      <h5>
        Nombre d'utilisateurs dans la base de données est de :{" "}
        <strong>{props.users.length} </strong>
        {props.users.length === 1 ? "utilisateur" : "utilisateurs"}
      </h5>
      <ul>
        {props.users.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age < 18 ? "Mineur" : ` Majeur: ${user.age}`}
            job={user.job}
          />
        ))}
      </ul>
    </Fragment>
  );
}
