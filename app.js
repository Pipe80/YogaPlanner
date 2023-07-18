import React from 'react';

function App() {
  return (
    <div style={{ backgroundColor: '#f2e9ff', minHeight: '100vh', padding: '20px' }}>
      <nav style={{ backgroundColor: '#6c63ff', padding: '10px', marginBottom: '20px' }}>
        <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end' }}>
          <li style={{ marginRight: '10px' }}><a href="#">Etusivu</a></li>
          <li style={{ marginRight: '10px' }}><a href="#">Tunnit</a></li>
          <li style={{ marginRight: '10px' }}><a href="#">Rekisteröidy</a></li>
          <li style={{ marginRight: '10px' }}><a href="#">Kirjaudu sisään</a></li>
        </ul>
      </nav>

      <h1 style={{ color: '#6c63ff', textAlign: 'center' }}>Tervetuloa YogaPlanneriin!</h1>
      <p style={{ color: '#333', textAlign: 'center' }}>Tämä on YogaPlanner-sovelluksen etusivu.</p>

      <form style={{ maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ color: '#6c63ff' }}>Rekisteröidy</h2>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Nimi:</label>
          <input type="text" id="name" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Sähköposti:</label>
          <input type="email" id="email" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Salasana:</label>
          <input type="password" id="password" />
        </div>
        <button style={{ backgroundColor: '#6c63ff', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px' }}>Rekisteröidy</button>
      </form>
    </div>
  );
}

export default App;
