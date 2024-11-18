import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Невірний формат електронної пошти")
    .required("Поле не може бути порожнім"),
});

const ForgotPassword = () => {
  const handleResetPassword = (values: any) => {
    console.log("Запит на скидання пароля відправлено на:", values.email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-general-text p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-general-text mb-4 sm:mb-6">
          Відновлення пароля
        </h2>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={resetPasswordSchema}
          onSubmit={handleResetPassword}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="mb-3 sm:mb-4">
                <label className="block text-gray-700">Електронна пошта</label>
                <Field
                  name="email"
                  type="email"
                  className={`w-full px-4 py-2 border-b-2 ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-general-text text-white font-bold py-2 rounded-lg hover:bg-general-lighter transition duration-300"
              >
                Надіслати посилання для скидання
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
