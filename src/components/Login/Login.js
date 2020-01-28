import React from "react";
import {FormControl, InputLabel, Input, InputAdornment, IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';

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

  return (
    <div className="register-form">
      <form action="">
        <FormControl>
          <InputLabel htmlFor="standard-adornment-password">EMAIL</InputLabel>
          <Input
            type="email"
            color="secondary"
            name="email"
            onChange={handleChange('email')}
          />

        </FormControl>

        <br/>
        <FormControl>
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
        <input type="submit" value="LOGIN"/>
      </form>
    </div>
  )
};
