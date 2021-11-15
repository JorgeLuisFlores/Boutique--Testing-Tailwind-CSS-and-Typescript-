import React from 'react'
import { BrowserRouter as Router,NavLink,} from "react-router-dom";

type Props = {
  open: boolean;
}

function DropMenu(props: Props) {

  return (
    <Router>
      <ul>

        <NavLink to="/menu1">
          <li>Menu 1</li>
        </NavLink>

        <NavLink to="/menu2">
          <li>Menu 2</li>
        </NavLink>

        <NavLink to="/menu3">
          <li>Menu 3</li>
        </NavLink>

        <NavLink to="/menu4">
          <li>Menu 4</li>
        </NavLink>
      </ul>


    </Router >
  )
}

export default DropMenu