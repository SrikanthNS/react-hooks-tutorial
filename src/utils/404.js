import React from 'react';

import './404.css';

export default function NotFound() {
  return (
    <main>
      <div className="wrap-404">
        <div>
          <h1 className="header-404">404</h1>
          <div className="subheader-wrap-404">
            <h2 className="subheader-404">This page could not be found.</h2>
          </div>
        </div>
      </div>
    </main>
  );
}