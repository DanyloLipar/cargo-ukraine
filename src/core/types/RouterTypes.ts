export interface IRoute {
  path: string;
  element: React.ReactElement;
}

export enum UIRoutes {
  HOME = "",
  AUTH = "auth",
  FEEDBACK_FORM = "contact",
}

export enum ChildRoutes {
  LOGIN = "login",
  SIGNUP = "signup",
  FORGOT_PASSWORD = "forgot-password",
  SET_PASSWORD = "set-password",
}
