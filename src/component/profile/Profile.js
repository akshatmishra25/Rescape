import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './profile.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img className="dataimg" src={user.picture} alt={user.name} 
            
        />
        {/* <p className="data">{user.name}</p> */}
        <p className="data">{user.email}</p>
      </div>
    )
  );
};

export default Profile;