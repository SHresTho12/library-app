import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navlinks from './Navlinks';
import PageLayout from './PageLayout';
import { useUser } from '../../Hooks/UserContext';
const { Header, Content, Footer } = Layout;

export default function Navbar() {


  const {user , logout} = useUser();
  console.log(user);
      const handleLogout = () => {
    logout();
  };
  return (
         <Header>
         <Navlinks to="/homepage" name="Library"> </Navlinks>
           {user  ? ( <Navlinks to="/profile" name="Profile"> </Navlinks>) : (null)
        }
      <Navlinks to="/books" name="Books"> </Navlinks>
      {user && user.Role === 1 ? ( <Navlinks to="/addBooks" name="Add Books"> </Navlinks>) : (null)
        }
          {!user  ? ( <Navlinks to="/login" name="Log in"> </Navlinks>) : (null)
        }
          {!user  ? ( <Navlinks to="/signup" name="Sign up"> </Navlinks>) : (null)
        }
      {
        user ? ( <button onClick={handleLogout}>Logout</button>) : (null)
      }
      {user && user.Role === 1 ? ( <Navlinks to="/users" name="Users"> </Navlinks>) : (null)}

      </Header>
  )
}
