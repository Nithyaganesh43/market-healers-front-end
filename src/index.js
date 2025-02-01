import React, { useEffect, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import CookiePopup from './components/CookiePopUp';
import { GlobalStyle } from './globalStyles';
import Contact from './components/Contact/index';
import Footer from './components/Footer/index';
const Header = lazy(() => import('./components/Header/index'));
const TermsAndConditions = lazy(() =>
  import('./Pages/TermsAndConditions/index')
);
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/index'));
const Home = lazy(() => import('./Pages/Home'));

const RootApp = () => {
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
          toast.success(
            'Happy To see You Again. LogIn and Heal Your Finance Life Here'
          );
        } else {
          toast.success(
            'Welcome To Market Healers. SignUp/Login and Heal Your Finance Life Here'
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={null}>
        <Outlet />
        <Contact />
        <Footer/>
      </Suspense>
      <ToastContainer position="top-right" autoClose={3000} />
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
            <CookiePopup />
            <Home />
          </>
        ),
      },
      {
        path: '/termsofservice',
        element: <TermsAndConditions />,
      },
      {
        path: '/privacypolicy',
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
