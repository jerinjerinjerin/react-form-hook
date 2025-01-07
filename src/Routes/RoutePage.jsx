import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { Toaster } from 'react-hot-toast';
import LoadingPage from "../pages/loading/LoadingPage";
import { ROUTE } from "./route";
import { ErrorBoundray } from "../utils/ErrorBoundray";


const HomePage = React.lazy(() => import("../pages/home/HomePage"));
const RegisterPage = React.lazy(() => import("../pages/auth/RegisterPage"));
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFound/NotFoundPage"));
const Navbar = React.lazy(() => import("../components/navbar/Navbar"));
const Footer =React.lazy(() => import("../components/footer/Footer"));

const RoutePage = () => {
  return (
    <BrowserRouter>
      <ErrorBoundray>
        <Suspense fallback={<LoadingPage />}>
         <Toaster position="top-center" />
          <Navbar/>
          <Routes>
            <Route exact path={ROUTE.HOME} element={<HomePage />} />
            <Route path={ROUTE.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTE.LOGIN} element={<LoginPage />} />
            <Route path={ROUTE.NOTFOUND} element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </ErrorBoundray>
    </BrowserRouter>
  );
};

RoutePage.displayName = "RoutePage";

export { RoutePage };
