import React from 'react'

import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

import './HomePage.css'
import '../../index.css'


function HomePage() {
  return (
    <div>
      <Link to='/add-person'>
        <Button>
          Add person
        </Button>
      </Link>
    </div>
  )
}

export default HomePage;
