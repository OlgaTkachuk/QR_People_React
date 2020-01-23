import React, {useState} from 'react'
import {useHistory} from "react-router-dom";

import Button from "@material-ui/core/Button";

import './HomePage.css'
import ErrorDialog from "../ErrorDialog/ErrorDialog";

function HomePage() {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  function handleClick() {
    history.push("/hello");
  }

  function dialogOpen() {
    setOpen(true)
  }

  return (
    <div className="mainDiv">
      <Button onClick={handleClick}>
        HELLO
      </Button>

      <Button onClick={dialogOpen}>
        EROOR
      </Button>
      <ErrorDialog open={open} onClose={()=> {setOpen(false)}}/>
    </div>
  )
}

export default HomePage;
