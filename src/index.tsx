import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './configurations/appRouter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(routes);

