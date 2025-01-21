import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Contact from './components/Contact/index';
import ReactDOM from 'react-dom/client';
import { lazy, Suspense } from 'react';

import { GlobalStyle } from './globalStyles';
const Header = lazy(() => import('./components/Header/index'));
const TermsAndConditions = lazy(() =>
  import('./Pages/TermsAndConditions/index')
);
 const Home = lazy(() => import('./Pages/Home'));

const RootApp = () => (
  <>
    <Suspense fallback={null}>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Contact />
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
        element: [<Home />],
      },
      {
        path: '/termsofservice',
        element: [<TermsAndConditions />],
      }, 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
