import { useEffect, useState } from 'react';
import { pingBackend } from '../api/ping';
import './App.css'

function App() {
  const [message, setMessage] = useState('No response');

  useEffect(() => {
    pingBackend().then(data => setMessage(data.message));
  }, []);

  return (
    <div className="app">
      <h1>Smart KPI Dashboard</h1>
      <p>Backend: {message}</p>
    </div>
  );
}

export default App
