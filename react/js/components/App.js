import React from 'react';
import { Link } from 'react-router';

export default function App({ children }) {
  return (
    <div>
      <header role="banner">
        <h1>Site Title</h1>

        <nav role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main role="main">{children}</main>
    </div>
  )
};
