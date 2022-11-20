import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '98.css';

import Layout from './components/layout';
import Index from './pages/Index';
import About from './pages/About';
import Resume from './pages/Resume';
import './styles/index.scss';

const router = createBrowserRouter([
  { path: '/', element: <Index /> },
  { path: '/about', element: <About /> },
  { path: '/resume', element: <Resume /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
