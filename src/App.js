import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <GlobalStyle /> 
        <ScrollToTop /> 
        <Home /> 
      </Suspense>
    </>
  );
}

export default App;
