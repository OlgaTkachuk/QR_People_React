import React from "react";

import {Button} from "@material-ui/core";

import './Person.css'
import {api} from "../../../api/request.wrapper";

export const Person = ({person: {_id, name, surname, description, medical_info, city}, persons}) => {

  async function handleDeleteClick() {
    console.log(_id);
    const index = persons.findIndex(person => person._id === _id);
    persons.splice(index, 1);

    await api.editPersons(persons)

    console.log(persons);
  }


  return (
    <div>
      <div className='person-info-part'>
        <img src={require("../../../assets/no-avatar.png")} alt="NO PHOTO"/>
      </div>

      <div className='person-info-part'>
        <div>
          Name: {name}
        </div>

        <p/>

        <div>
          Surname: {surname}
        </div>

        <p/>

        <div>
          Description: {description}
        </div>

        <p/>

        <div>
          Medical info: {medical_info}
        </div>

        <p/>

        <div>
          City: {city}
        </div>
      </div>

      <p/>

      <Button className='remove-person-button' onClick={handleDeleteClick}>
        Remove {name}
      </Button>

      <hr/>
    </div>
  )
};
