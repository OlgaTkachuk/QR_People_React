import React from 'react';
import './ErrorDialog.css'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


function ErrorDialog(props) {

  console.log(props);

  return (
    <Dialog open={props.open} className='error'>
      <DialogTitle> TITLE </DialogTitle>
      {props.children}
    </Dialog>
  )
}


export default ErrorDialog;
