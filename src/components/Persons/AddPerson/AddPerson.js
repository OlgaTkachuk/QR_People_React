import React from "react";

import {FormControl, Input, InputLabel} from "@material-ui/core";

import {FormSubmitButton} from "../../helper-components";
import {api} from '../../../api/request.wrapper'

export const AddPerson = () => {

  const [values, setValues] = React.useState({
    name: '',
    surname: '',
    description: '',
    medical_info: '',
    city: '',
  });

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };


  const submitForm = async e => {
    e.preventDefault();
    await api.addPerson(values);
  };

  return (
    <div className="main-form">
      <form onSubmit={submitForm}>
        <FormControl className='input-label'>
          <InputLabel>NAME</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('name')}
          />
        </FormControl>
        <br/>

        <FormControl className='input-label'>
          <InputLabel>SURNAME</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('surname')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel>DESCRIPTION</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('description')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel>DESCRIPTION</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('email')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel>MEDICAL INFO</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('medical_info')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel>CITY</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('city')}
          />
        </FormControl>

        <br/>

        <FormSubmitButton>ADD PERSON</FormSubmitButton>

      </form>
    </div>
  );
};
