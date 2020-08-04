import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "React",
    },
    {
      id: 1,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ];
  //   const names = ["Bruce", "Clark", "Diana"];
  const personList = persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;
