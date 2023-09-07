import React from 'react';

function UserCard({ userData }) {
  return (
    <div className="user-card">
      {userData ? (
        <>
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          </div>
          <div>
          <h5>Name : {userData.name}</h5>
         <p>Company : {userData.company}</p>
         <p>Location : {userData.location}</p>

        </div>
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default UserCard;