import React, {useState} from 'react'

import Button from "@material-ui/core/Button";

import './HomePage.css'
import '../../index.css'
import ErrorDialog from "../ErrorDialog/ErrorDialog";

function HomePage() {
  const [open, setOpen] = useState(false);

  function dialogOpen() {
    setOpen(true)
  }

  return (
    <div>
      HOME PAGE
      {/*<Button onClick={dialogOpen}>*/}
      {/*  EROOR*/}
      {/*</Button>*/}
      {/*<ErrorDialog open={open} onClose={()=> {setOpen(false)}}>*/}
      {/*    Innertext*/}
      {/*</ErrorDialog>*/}
    </div>
  )
}

export default HomePage;
