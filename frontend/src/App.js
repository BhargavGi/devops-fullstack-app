import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then((response) => response.json())
      .then((json) => setData(json.message))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Frontend</h1>
      <p>{data}</p>
    </div>
  );
};

export default App;
