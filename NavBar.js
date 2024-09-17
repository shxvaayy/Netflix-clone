import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchData } from './Api'; // Import your fetchData function

const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #111;
  color: white;
`;

const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const NavBar = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const result = await fetchData(); // Fetch user data
        setUser(result);
      } catch (error) {
        setError(error.message);
      }
    }

    loadData();
  }, []);

  return (
    <NavBarContainer>
      <h1>Netflix Clone</h1>
      <div>
        {error && <p>Error: {error}</p>}
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ProfilePic src={user.profilePicUrl} alt="Profile" />
            <span>{user.name}</span>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button>Sign Out</button>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
