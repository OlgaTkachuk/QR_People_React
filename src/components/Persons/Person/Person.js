import React from "react";

import './Person.css'

export const Person = ({person: {name, surname, description, medical_info, city}}) => {

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


      <hr/>
    </div>
  )
};
