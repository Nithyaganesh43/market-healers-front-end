import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import App from "./App"; 

import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';
const Header = lazy(() => import('./components/Header/index')); 
const Footer = lazy(()=> import('./components/Footer/index'));

 

const RootApp = () => (
    
    <>
    <Suspense fallback={null}>
    <Header />
    <Outlet /> 
    </Suspense>
    </>
   
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootApp />,
    children: [
      {
        path: '/',
        element: [<App />],
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
