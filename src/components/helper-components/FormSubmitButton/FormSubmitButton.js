import React from "react";

import Button from "@material-ui/core/Button";

import './FormSubmitButton.css'

export const FormSubmitButton = ({children}) => {
  return (
    <Button
      as="input"
      type='submit'
      className='submit-button'
      variant="outlined"
      color="primary"
    >
      {children}
    </Button>
  )
};
