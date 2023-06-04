import React from 'react'
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
export default function Navlinks({ r, name, ...rest }) {
  return (
//create a rouute link for different page

    <Link to={r} {...rest}>
      <Button type="link" style={{ color: 'white' }}>
        {name}
      </Button>
    </Link>
    
  )
}

