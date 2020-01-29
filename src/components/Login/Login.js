import React from "react";
import {FormControl, InputLabel, Input, InputAdornment, IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';
import Button from "@material-ui/core/Button";

import './Login.css'
import {FormSubmitButton} from "../helper-components";

export const Login = () => {

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(values);
  }

  return (
    <div className="register-form">
      <form onSubmit={submitForm}>
        <FormControl className='input-label'>
          <InputLabel htmlFor="standard-adornment-password">EMAIL</InputLabel>
          <Input
            type="email"
            color="secondary"
            onChange={handleChange('email')}
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
        <FormSubmitButton>LOGIN</FormSubmitButton>
      </form>
    </div>
  )
};
