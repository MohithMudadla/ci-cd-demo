import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/') // Replace later with Render URL
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return <h1>{message || 'Loading...'}</h1>;
}

export default App;
