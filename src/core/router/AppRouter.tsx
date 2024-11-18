import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FeedbackForm from "../../components/FeedbackForm";
import ForgotPassword from "../../components/ForgotPassword";
import LogIn from "../../components/LogIn";
import Main from "../../components/Main";
import SetPassword from "../../components/SetPassword";
import SignUp from "../../components/SignUp";
import PrivateLayout from "../../layouts/PrivateLayout";
import PublicLayout from "../../layouts/PublicLayout";
import { ScrollTop } from "../../ScrollToTop";

import { ChildRoutes, IRoute, UIRoutes } from "../types/RouterTypes";

export const publicRoutes: IRoute[] = [
  {
    path: UIRoutes.HOME,
    element: <Main />,
  },
  {
    path: `${UIRoutes.AUTH}/${ChildRoutes.LOGIN}`,
    element: <LogIn />,
  },
  {
    path: `${UIRoutes.AUTH}/${ChildRoutes.SIGNUP}`,
    element: <SignUp />,
  },
  {
    path: `${UIRoutes.AUTH}/${ChildRoutes.SET_PASSWORD}`,
    element: <SetPassword />,
  },
  {
    path: `${UIRoutes.AUTH}/${ChildRoutes.FORGOT_PASSWORD}`,
    element: <ForgotPassword />,
  },
  {
    path: `${UIRoutes.FEEDBACK_FORM}`,
    element: <FeedbackForm />,
  },
];

export const privateRoutes: IRoute[] = [];

const AppRouter: FC = () => {
  return (
    <ScrollTop>
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
    </ScrollTop>
  );
};

export default AppRouter;
