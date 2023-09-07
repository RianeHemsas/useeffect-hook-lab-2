import React, { useState, useEffect } from 'react';
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, [username]);

  const fetchData = async () => {
   
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } 
      else {
        // Handle error
        console.error('Error fetching data from API');
        setUserData(null);
      }
    
  };

  return (
    <div>
      <Form setUsername={setUsername} />
      <UserCard userData={userData} />
    </div>
  );
}

export default App;