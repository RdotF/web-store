import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector hooks
import '../style/styles.css'; // Import styles

const Authorization: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const [LoggedIn, setLoggedIn] = useState(false); // Get isLoggedIn from Redux store
  const isLoggedIn = useSelector((state: any) => state.cart.isLoggedIn);
  const handleLogin = () => {
    const usersFromRegistration = JSON.parse(localStorage.getItem('users') || '{}');
    if (usersFromRegistration[username] === password) {
      setMessage('Login successful!');
      dispatch({ type: 'LOGIN' });
      setLoggedIn(true);  // Dispatch LOGIN action upon successful login
    } else {
      setMessage('Invalid username or password');
    }
  };
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' }); // Dispatch LOGOUT action upon logout
    setLoggedIn(false); // Set isLoggedIn to false upon logout
  };
  return (
    <div className="registration-container">
      {isLoggedIn ? ( // Conditionally render based on isLoggedIn state
        <div className="registration-form">
          <h2>Welcome!</h2>
          <p>You are logged in!</p>
          <Button variant="primary" onClick={handleLogout} style={{ borderRadius: '15px', backgroundColor: '#adaa68', borderColor: '#adaa68', marginTop: '15px' }}>
              Log out
            </Button>
        </div>
      ) : (
        <div className="registration-form">
          <h2>Authorization</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ borderRadius: '15px', fontSize: '18px', marginBottom: '15px' }} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ borderRadius: '15px', fontSize: '18px' }} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleLogin} style={{ borderRadius: '15px', backgroundColor: '#adaa68', borderColor: '#adaa68', marginTop: '15px', marginLeft:'155px' }}>
              Login
            </Button>
            <p style={{ textAlign: 'center', marginTop: '15px', color: '#624726' }}>{message}</p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <Button variant="link" href="/registration" style={{ color: '#624726' }}>Register</Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Authorization;
