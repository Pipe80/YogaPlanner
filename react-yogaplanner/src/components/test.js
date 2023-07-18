import React from 'react';

function Test() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <img src="woman.jpg" alt="Meditation" style={{ maxWidth: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '0', right: '0', padding: '10px' }}>
          <button style={{ backgroundColor: '#C57997', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', marginRight: '10px' }}>Sign up</button>
          <button style={{ backgroundColor: '#C57997', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px' }}>Log out</button>
        </div>
        <h1 style={{ color: '#692D51', textAlign: 'center', position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '32px', fontWeight: 'bold' }}>Find your inner peace!</h1>
      </div>

     

      <p style={{ color: '#692D51', textAlign: 'center', marginBottom: '20px' }}>Design your own yogaplan</p>

      <form style={{ maxWidth: '400px', width: '100%' }}>
        <h2 style={{ color: '#692D51', textAlign: 'center', marginBottom: '20px' }}>Register</h2>
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
        <button style={{ backgroundColor: '#C57997', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', width: '100%' }}>Register</button>
      </form>
      <img src="meditation.jpg" alt="Meditation" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
      <footer style={{ color: '#000', backgroundColor: '#fff', textAlign: 'center', padding: '40px', width: '100%', fontWeight: 'bold' }}>
        YogaPlanner 2023
      </footer>
    </div>
  );
}

export default Test;
