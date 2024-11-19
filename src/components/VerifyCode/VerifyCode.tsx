import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyCode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone || "";

  const verificationSchema = Yup.object().shape({
    code: Yup.string()
      .length(6, "Код має містити 6 цифр")
      .required("Код є обов'язковим"),
  });

  const handleVerification = (values: any) => {
    // Запит на сервер для підтвердження коду
    // Якщо код правильний, завершити реєстрацію
    console.log("Код підтверджено:", values.code);
    navigate("/success"); // Перенаправлення на успішну сторінку або в акаунт
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-general-text p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-general-text mb-6 font-poppins">
          Підтвердження телефону
        </h2>
        <p className="text-center mb-4 font-roboto">
          Введіть код, який надійшов на номер +380{phone}
        </p>

        <Formik
          initialValues={{ code: "" }}
          validationSchema={verificationSchema}
          onSubmit={handleVerification}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="code"
                placeholder="6-значний код"
                className="w-full p-2 mb-4 text-center outline-none"
              />
              <ErrorMessage
                name="code"
                component="div"
                className="text-red-500 text-sm mb-4"
              />

              <button
                type="submit"
                className="w-full bg-general-text text-white py-2 rounded-lg hover:bg-general-lighter font-roboto"
              >
                Підтвердити
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VerifyCode;
