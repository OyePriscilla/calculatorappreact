import React from 'react';
import { Link } from 'react-router-dom';

const ulList = {
  listStyleType: 'none',
  display: 'flex',
};

const linkList = {
  paddingRight: '10px',
  paddingLeft: '10px',
  fontSize: '20px',
  borderRight: '2px solid #000',
};

export default function Header() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#707075', height: '60px', marginBottom: '20px',
    }}
    >
      <h1 className="header" style={{ color: '#fff', marginLeft: '50px' }}>Math Magicians</h1>
      <nav>
        <ul className="ulLink" style={ulList}>
          <li style={linkList}><Link style={{ color: '#fff' }} to="./">Home</Link></li>
          <li style={linkList}><Link style={{ color: '#fff' }} to="./calculator">Calculator</Link></li>
          <li style={linkList}><Link style={{ color: '#fff', borderRight: 'none', marginRight: '150px' }} to="./quote">Quotes</Link></li>
        </ul>
      </nav>
    </div>
  );
}
