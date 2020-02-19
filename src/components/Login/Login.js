import React, {useContext} from "react";
import {FormControl, InputLabel, Input, InputAdornment, IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from '@material-ui/icons';

import './Login.css'
import {FormSubmitButton} from "../helper-components";
// import {tokenEnum} from "../../constants";
// import {api} from "../../api/request.wrapper";
import {AuthContext} from "../../context/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);


  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {// TODO try w/o state
    setValues({...values, showPassword: !values.showPassword});
  };

  const handleChange = prop => event => {
    setValues({...values, [prop]: event.target.value});
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(values);
    delete values.showPassword;
    // const resp = await api.authUser({...values});
    //
    // localStorage.setItem(tokenEnum.ACCESS_TOKEN, resp.data.data.login[tokenEnum.ACCESS_TOKEN]);
    // localStorage.setItem(tokenEnum.REFRESH_TOKEN, resp.data.data.login[tokenEnum.REFRESH_TOKEN]);

    login();
  };

  return (
    <div className="main-form">
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
