import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Пароль повинен містити мінімум 8 символів")
    .matches(/[A-Z]/, "Пароль повинен містити хоча б одну велику літеру")
    .matches(/[0-9]/, "Пароль повинен містити хоча б одну цифру")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Пароль повинен містити хоча б один спеціальний символ"
    )
    .matches(
      /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]+$/,
      "Пароль може містити лише латинські літери та спеціальні символи"
    )
    .required("Поле не може бути порожнім"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Паролі не збігаються")
    .required("Поле не може бути порожнім"),
});

const SetPassword = () => {
  const handleSubmit = (values: any) => {
    console.log("Пароль встановлено:", values.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00FF91] p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#00FF91] mb-4 sm:mb-6">
          Встановіть новий пароль
        </h2>

        <Formik
          initialValues={{ password: "", confirmPassword: "" }}
          validationSchema={passwordSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-700">Новий пароль</label>
                <Field
                  name="password"
                  type="password"
                  className={`w-full px-4 py-2 border-b-2 ${
                    errors.password && touched.password
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none`}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-700">
                  Підтвердження пароля
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={`w-full px-4 py-2 border-b-2 ${
                    errors.confirmPassword && touched.confirmPassword
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none`}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00FF91] text-white font-bold py-2 rounded-lg hover:bg-[#00e680] transition duration-300"
              >
                Встановити пароль
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SetPassword;
