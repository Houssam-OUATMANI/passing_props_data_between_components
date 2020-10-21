import React from "react";

export default function UserItem(props) {
  return (
    <li>
      <section>
        <code>identifiant: {props.id}</code>
      </section>
      <section>
        <code>Name: {props.name}</code>
      </section>
      <section>
        <code>Age: {props.age}</code>
      </section>
      <section>
        <code>Job: {props.job}</code>
        <hr style={{ padding: ".3rem", backgroundColor: "blue" }}></hr>
      </section>
    </li>
  );
}
