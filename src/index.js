import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const content = <h1 style = {{backgroundColor: 'green', textAlign: 'center'}}>Hello World!</h1>
root.render(content);