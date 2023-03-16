import React from 'react'
import { NavLink as Link, useLocation } from 'react-router-dom'
export default function Navlinks({ to, name, ...rest }) {
  return (
   <Link to={to}>
    {name}
   </Link>
  )
}

