import React from 'react'
import PageLayout from '../components/Layout/PageLayout'
import { useUser } from '../Hooks/UserContext';
import "./CSS/Profile.css";
import { useNavigate , Link } from "react-router-dom";
export default function Profile() {
const navigate = useNavigate();
 const { user } = useUser();
 console.log(user);

  if (!user) {
     navigate('/login');
    return <div>loading...</div>;
   
  }

  return (
    <div className="profile-container">
      <PageLayout></PageLayout>

    <div className="user-info">
        <h1>Welcome, {user.Name}</h1>
      <p>Email: {user.Email}</p>
    </div>
{
    user.Role === 1? (
        <div className="admin-info">

        <h1>Admin Info</h1>
        <p>Role: Admin</p>
        <div className="buttons">
        <button className="btn btn-primary"><Link to="/addBooks">Add Books</Link></button>
        <button className="btn btn-primary"><Link to="/books">Delete</Link></button>
        <button className="btn btn-primary"><Link to="/books"> Update Books</Link></button>
        <button className="btn btn-primary"><Link to="/users">Update Users</Link></button>
        



        </div>




        </div>
    ) : (
        <div className="user-info">
        <h1>User Info</h1>
        <p>Role: User</p>
             <div className="buttons">
        <button className="btn btn-primary"><Link  to="/borrow">Borrow Books</Link></button>
        <button className="btn btn-primary"><Link  to="/return">Return Books</Link></button>
      
        



        </div>
        </div>
    )

}
    </div>
  );
}
