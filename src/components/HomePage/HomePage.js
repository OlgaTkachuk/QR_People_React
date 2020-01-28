import React, {useState} from 'react'
import {Link} from "react-router-dom";

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
    <div className="mainDiv">
      <Link to='/hello'>
        <Button>HELLO</Button>
      </Link>


      <Button onClick={dialogOpen}>
        EROOR
      </Button>
      <ErrorDialog open={open} onClose={()=> {setOpen(false)}}>
          Innertext
      </ErrorDialog>
    </div>
  )
}

export default HomePage;
