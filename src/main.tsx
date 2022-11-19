import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '98.css';
import './styles/index.scss';

import Index from './pages/Index';
import Layout from './components/layout';

const router = createBrowserRouter([{ path: '/', element: <Index /> }]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>,
);
