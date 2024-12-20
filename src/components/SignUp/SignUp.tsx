import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import VerifyCode from "../VerifyCode";
import { Link } from "react-router-dom";
import { ChildRoutes, UIRoutes } from "../../core/types/RouterTypes";

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіїєІЇЄ]+$/, "Використовуйте тільки букви")
    .required("Поле не може бути порожнім"),
  lastName: Yup.string()
    .matches(/^[a-zA-Zа-яА-ЯіїєІЇЄ]+$/, "Використовуйте тільки букви")
    .required("Поле не може бути порожнім"),
  email: Yup.string()
    .email("Невірний формат email")
    .required("Поле не може бути порожнім"),
  phone: Yup.string()
    .matches(/^[0-9]{9}$/, "Телефон повинен містити 9 цифр без префіксу")
    .required("Поле не може бути порожнім"),
  password: Yup.string()
    .min(8, "Пароль повинен містити мінімум 8 символів")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .matches(/[0-9]/, "Пароль повинен містити хоча б одну цифру")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Пароль повинен містити хоча б один спеціальний символ"
    )
    .matches(/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/, "Тільки латинські літери")
    .required("Поле не може бути порожнім"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Паролі не збігаються")
    .required("Поле не може бути порожнім"),
});

const SignUp = () => {
  const [sent, setSent] = useState<boolean>(false);

  const handleSubmit = (values: any) => {
    setSent(true);
    console.log("Зареєстровано користувача:", values);
  };

  return (
    <>
      {!sent ? (
        <div className="flex items-center justify-center min-h-screen bg-general-text p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center text-general-text mb-6 font-poppins">
              Реєстрація
            </h2>

            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-poppins">
                      Ім'я
                    </label>
                    <Field
                      name="firstName"
                      className={`font-roboto w-full px-4 py-2 border-b-2 ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none`}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm mt-1 font-roboto"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-poppins">
                      Прізвище
                    </label>
                    <Field
                      name="lastName"
                      className={`font-roboto w-full px-4 py-2 border-b-2 ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none`}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm mt-1 font-roboto"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-poppins">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className={`font-roboto w-full px-4 py-2 border-b-2 ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none`}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1 font-roboto"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-poppins">
                      Номер телефону
                    </label>
                    <div className="flex items-center">
                      <span className="bg-gray-200 px-3 py-2 rounded-l font-roboto">
                        +380
                      </span>
                      <Field
                        name="phone"
                        type="text"
                        className={`font-roboto font-roboto w-full px-4 py-2 border-b-2 rounded-r ${
                          errors.phone && touched.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none`}
                        placeholder="ХХХ ХХХ ХХХ"
                      />
                    </div>
                    <ErrorMessage
                      name="phone"
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
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1 font-roboto"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-poppins">
                      Підтвердження пароля
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className={`font-roboto w-full px-4 py-2 border-b-2 ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none`}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500 text-sm mt-1 font-roboto"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <button
                      type="submit"
                      className="w-full bg-general-text text-white font-bold py-2 rounded-lg hover:bg-general-lighter transition duration-300 font-roboto"
                    >
                      Зареєструватися
                    </button>
                    <Link
                      to={`/${UIRoutes.AUTH}/${ChildRoutes.LOGIN}`}
                      className="hover:text-general-text text-center text-[14px] mt-[15px] font-roboto"
                    >
                      Вже маєте акаунт? Увійдіть
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <VerifyCode />
      )}
    </>
  );
};

export default SignUp;
