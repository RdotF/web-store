// Registration.tsx

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style/styles.css'; // Import styles

const Registration: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users') || '{}');
    if (existingUsers.hasOwnProperty(username)) {
      setMessage('Username already exists. Please choose a different one.');
      return;
    }
    const updatedUsers = { ...existingUsers, [username]: password };
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsername('');
    setPassword('');
    setMessage('Registration successful! Please login.');
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Registration</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: '15px', fontSize: '18px', marginBottom: '15px' }} /> {/* Added marginBottom */}
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '15px', fontSize: '18px' }} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleRegister} style={{ borderRadius: '15px', backgroundColor: '#adaa68', borderColor: '#adaa68', marginTop: '15px' }}>
            Register
          </Button>
          <p style={{ textAlign: 'center', marginTop: '15px', color: '#624726' }}>{message}</p>
          <div style={{ textAlign: 'center', marginTop: '15px' }}>
            <Link to="/authorization" style={{ color: '#624726' }}>Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Registration;
