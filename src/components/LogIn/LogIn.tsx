import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ChildRoutes, UIRoutes } from "../../core/types/RouterTypes";

const loginSchema = Yup.object().shape({
  emailOrPhone: Yup.string()
    .test(
      "emailOrPhone",
      "Введіть коректний email або номер телефону",
      (value: any) =>
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ||
        /^[0-9]{9}$/.test(value)
    )
    .required("Поле не може бути порожнім"),
  password: Yup.string().required("Поле не може бути порожнім"),
});

const Login = () => {
  const handleSubmit = (values: any) => {
    console.log("Увійшов користувач:", values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-general-text p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-general-text mb-6 font-poppins">
          Увійдіть
        </h2>

        <Formik
          initialValues={{ emailOrPhone: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700 font-poppins">
                  Email або номер телефону
                </label>
                <Field
                  name="emailOrPhone"
                  className={`font-roboto w-full px-4 py-2 border-b-2 ${
                    errors.emailOrPhone && touched.emailOrPhone
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none`}
                />
                <ErrorMessage
                  name="emailOrPhone"
                  component="div"
                  className="text-red-500 text-sm mt-1 font-roboto"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-poppins">
                  Пароль
                </label>
                <Field
                  name="password"
                  type="password"
                  className={`font-roboto w-full px-4 py-2 border-b-2 ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none`}
                />
                <div className="w-[100%] flex justify-end font-roboto">
                  <Link
                    to={`/${UIRoutes.AUTH}/${ChildRoutes.FORGOT_PASSWORD}`}
                    className="hover:text-general-text text-[14px] mt-[3px]"
                  >
                    Забули пароль?
                  </Link>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1 font-roboto"
                />
              </div>

              <div className="flex flex-col justify-center">
                <button
                  type="submit"
                  className="w-full bg-general-text text-white font-bold py-2 rounded-lg hover:bg-general-lighter transition duration-300 w-[100%] font-roboto"
                >
                  Увійти
                </button>
                <Link
                  to={`/${UIRoutes.AUTH}/${ChildRoutes.SIGNUP}`}
                  className="hover:text-general-text text-center text-[14px] mt-[15px] font-roboto"
                >
                  Ще не маєте акаунту? Зареєструйтесь
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
