import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Contact from './components/Contact/index';
import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';

import { GlobalStyle } from './globalStyles';
const Header = lazy(() => import('./components/Header/index'));
const TermsAndConditions = lazy(() =>import('./Pages/TermsAndConditions/index')
);
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/index'));

const Home = lazy(() => import('./Pages/Home'));

const RootApp = () => {

  //  useEffect(() => {
  //    const checkAuth = async () => {
        
  //      try {
        //  const response = await fetch(
        //    'https://server.markethealers.com/markethealers/auth/authCheck',
        //    {
        //      method: 'GET',
        //      credentials: 'include',
        //    }
        //  );
  //        if (response.ok) { 
  //         window.location.href =
  //           'https://market-healers-main-front-end.vercel.app/';
  //        } else {
  //          console.error('Authentication failed:');
  //        }
  //      } catch (error) {
  //        console.error('Failed to fetch auth');
  //      } 
  //    };
  //    checkAuth();
  //  }, []);

  
  return (
  <>
    <Suspense fallback={null}>
      <GlobalStyle /> 
      <Outlet />
      <Contact />
    </Suspense>
  </>
)};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootApp />,
    children: [
      {
        path: '/',
        element: [ <Header />,<Home />],
      },
      {
        path: '/termsofservice',
        element: [<TermsAndConditions />],
      },
      {
        path: '/PrivacyPolicy',
        element: [<PrivacyPolicy />],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
