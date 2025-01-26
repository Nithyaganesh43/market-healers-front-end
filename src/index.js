import React, { useEffect, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from './globalStyles';
import Contact from './components/Contact/index';

const Header = lazy(() => import('./components/Header/index'));
const TermsAndConditions = lazy(() =>
  import('./Pages/TermsAndConditions/index')
);
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/index'));
const Home = lazy(() => import('./Pages/Home'));
const RootApp = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          'https://server.markethealers.com/markethealers/auth/authCheck',
          {
            method: 'GET',
            credentials: 'include',
          }
        );

        if (response.ok) {
          console.log("ok")
          setIsAuthenticated(true);
        } else {
          console.log("not OK")
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div> </div>;
  }

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div> </div>}>
        <Outlet />
        <Contact />
        <ToastContainer />
      </Suspense>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootApp />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Header />
            <Home />
          </>
        ),
      },
      {
        path: '/terms-of-service',
        element: <TermsAndConditions />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
