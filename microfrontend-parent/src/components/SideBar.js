// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link to="http://localhost:3001/">Home</Link></li>
        <li><Link to="http://localhost:3000/">About</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
