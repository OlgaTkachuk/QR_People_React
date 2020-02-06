import React from "react";
import {Person} from "../Person";

export const RelatedPersons = ({persons}) => {

  console.log(persons);

  return persons.map(person => (
    <div>
      <h3>RELATED PERSONS</h3>
      <p/>
      <Person person={person}/>
    </div>
  ))
};
