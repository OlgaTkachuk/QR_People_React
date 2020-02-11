import React from "react";

import {Person} from "../Person";

export const RelatedPersons = ({persons}) => {

  return persons.map(person => (
    <Person person={person}/>
  ))
};
