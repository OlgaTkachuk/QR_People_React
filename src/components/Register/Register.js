import React from "react";

import {FormControl, IconButton, Input, InputAdornment, InputLabel} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

import {FormSubmitButton} from "../helper-components";
import {api} from '../../api/request.wrapper'

export const Register = () => {

  const [values, setValues] = React.useState({
    email: '',
    name: '',
    surname: '',
    city: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };


  const submitForm = async e => {
    e.preventDefault();
    console.log(values);
    delete values.showPassword;
    await api.createUser({...values})
  };

  return (
    <div className="register-form">
      <form onSubmit={submitForm}>
        <FormControl className='input-label'>
          <InputLabel htmlFor="standard-adornment-password">NAME</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('name')}
          />
        </FormControl>
        <br/>

        <FormControl className='input-label'>
          <InputLabel htmlFor="standard-adornment-password">SURNAME</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('surname')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel htmlFor="standard-adornment-email">EMAIL</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('email')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel htmlFor="standard-adornment-city">CITY</InputLabel>
          <Input
            type="text"
            color="secondary"
            onChange={handleChange('city')}
          />
        </FormControl>

        <br/>

        <FormControl className='input-label'>
          <InputLabel htmlFor="standard-adornment-password">PASSWORD</InputLabel>
          <Input
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <br/>

        <FormSubmitButton>REGISTER</FormSubmitButton>

      </form>
    </div>
  );
};
