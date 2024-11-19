import React, { FC, Suspense, useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import PrivateLayout from "../../layouts/PrivateLayout";
import PublicLayout from "../../layouts/PublicLayout";
import ScrollTop from "../../ScrollTop";

import { ChildRoutes, IRoute, UIRoutes } from "../types/RouterTypes";

const Main = React.lazy(() => import("../../components/Main"));
const LogIn = React.lazy(() => import("../../components/LogIn"));
const SignUp = React.lazy(() => import("../../components/SignUp"));
const SetPassword = React.lazy(() => import("../../components/SetPassword"));
const ForgotPassword = React.lazy(
  () => import("../../components/ForgotPassword")
);
const FeedbackForm = React.lazy(() => import("../../components/FeedbackForm"));
const Calculator = React.lazy(() => import("../../components/Calculator"));

export const publicRoutes: IRoute[] = [
  { path: UIRoutes.HOME, element: <Main /> },
  { path: `${UIRoutes.AUTH}/${ChildRoutes.LOGIN}`, element: <LogIn /> },
  { path: `${UIRoutes.AUTH}/${ChildRoutes.SIGNUP}`, element: <SignUp /> },
  {
    path: `${UIRoutes.AUTH}/${ChildRoutes.SET_PASSWORD}`,
    element: <SetPassword />,
  },
  {
    path: `${UIRoutes.AUTH}/${ChildRoutes.FORGOT_PASSWORD}`,
    element: <ForgotPassword />,
  },
  { path: `${UIRoutes.FEEDBACK_FORM}`, element: <FeedbackForm /> },
  {
    path: `${UIRoutes.ACCOUNT}/${ChildRoutes.CALCULATOR}`,
    element: <Calculator />,
  },
];

export const privateRoutes: IRoute[] = [];

const AppRouter: FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ScrollTop>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/*" element={<PublicLayout />}>
              {publicRoutes.map((route, index) => (
                <Route key={`${route.path}${index}`} {...route} />
              ))}
              <Route
                path="*"
                element={<Navigate to={`/${UIRoutes.HOME}`} replace />}
              />
            </Route>

            <Route path="/*" element={<PrivateLayout />}>
              {privateRoutes.map((route, index) => (
                <Route key={`${route.path}${index}`} {...route} />
              ))}
              <Route
                path="*"
                element={<Navigate to={`/${UIRoutes.HOME}`} replace />}
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </ScrollTop>
  );
};

export default AppRouter;
