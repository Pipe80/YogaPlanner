import React from 'react';

function App() {
  return (
    <div style={{
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <nav style={{ backgroundColor: '#6c63ff', padding: '10px', marginBottom: '20px', width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <li style={{ marginRight: '10px' }}><a href="#">Sign up</a></li>
          <li style={{ marginRight: '10px' }}><a href="#">Log out</a></li>
        </ul>
      </nav>

      <h1 style={{ color: '#6c63ff', textAlign: 'center', marginBottom: '20px' }}>Find your inner peace!</h1>
      <p style={{ color: '#333', textAlign: 'center', marginBottom: '20px' }}>Design your own yogaplan</p>

      <div style={{ marginBottom: '20px' }}>
        <img src="meditation.jpg" alt="Meditation" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      <footer style={{ color: '#000', backgroundColor: '#fff', textAlign: 'center', padding: '10px', width: '100%' }}>
        YogaPlanner 2023
      </footer>

      <form style={{ maxWidth: '400px', width: '100%' }}>
        <h2 style={{ color: '#6c63ff', textAlign: 'center', marginBottom: '20px' }}>Register</h2>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button style={{ backgroundColor: '#6c63ff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', width: '100%' }}>Register</button>
      </form>
    </div>
  );
}

export default App;
