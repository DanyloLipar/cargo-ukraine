import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ICar } from "../../core/types/car";

const FeedbackForm = () => {
  const initialValues = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    cars: [{ make: "", model: "", bodyType: "", fuelType: "", year: "" }],
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ім'я є обов'язковим"),
    surname: Yup.string().required("Прізвище є обов'язковим"),
    phone: Yup.string()
      .matches(/^\d{9}$/, "Номер телефону має містити 9 цифр")
      .required("Телефон є обов'язковим"),
    email: Yup.string()
      .email("Невірний формат email")
      .required("Email є обов'язковим"),
    cars: Yup.array().of(
      Yup.object().shape({
        make: Yup.string().required("Введіть виробника"),
        model: Yup.string().required("Введіть модель"),
        bodyType: Yup.string().required("Виберіть тип кузова"),
        fuelType: Yup.string().required("Виберіть тип палива"),
        year: Yup.number()
          .min(1990, "Рік має бути не менше 1990")
          .required("Введіть рік"),
      })
    ),
  });

  const handleSubmit = (values: any) => {
    const formData = {
      ...values,
      cars: values.cars.map((car: ICar) => ({
        make: car.make,
        model: car.model,
        bodyType: car.bodyType,
        fuelType: car.fuelType,
        year: car.year,
      })),
    };
    console.log("Дані для відправки:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6">
          Форма зворотного зв'язку
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="grid gap-4 mb-4">
                <Field
                  name="name"
                  placeholder="Ім'я"
                  className="p-2 border rounded-md"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="surname"
                  placeholder="Прізвище"
                  className="p-2 border rounded-md"
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="phone"
                  placeholder="Телефон (без +380)"
                  className="p-2 border rounded-md"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="p-2 border rounded-md"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <h3 className="text-xl font-semibold mb-4">Додати бажане авто</h3>

              <FieldArray name="cars">
                {({ push, remove }) => (
                  <div>
                    {values.cars.map((car, index) => (
                      <div key={index} className="border p-4 mb-4 rounded-md">
                        <div className="flex gap-4">
                          <Field
                            name={`cars[${index}].make`}
                            placeholder="Виробник авто"
                            className="w-1/2 p-2 border rounded-md"
                          />
                          <ErrorMessage
                            name={`cars[${index}].make`}
                            component="div"
                            className="text-red-500 text-sm"
                          />

                          <Field
                            name={`cars[${index}].model`}
                            placeholder="Модель авто"
                            className="w-1/2 p-2 border rounded-md"
                          />
                          <ErrorMessage
                            name={`cars[${index}].model`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>

                        <div className="flex gap-4 mt-2">
                          <Field
                            as="select"
                            name={`cars[${index}].bodyType`}
                            className="w-1/2 p-2 border rounded-md"
                          >
                            <option value="">Тип кузова</option>
                            <option value="sedan">Седан</option>
                            <option value="suv">Позашляховик</option>
                            <option value="hatchback">Хетчбек</option>
                          </Field>
                          <ErrorMessage
                            name={`cars[${index}].bodyType`}
                            component="div"
                            className="text-red-500 text-sm"
                          />

                          <Field
                            as="select"
                            name={`cars[${index}].fuelType`}
                            className="w-1/2 p-2 border rounded-md"
                          >
                            <option value="">Тип палива</option>
                            <option value="gasoline">Бензин</option>
                            <option value="diesel">Дизель</option>
                            <option value="electric">Електро</option>
                          </Field>
                          <ErrorMessage
                            name={`cars[${index}].fuelType`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>

                        <div className="flex gap-4 mt-2">
                          <Field
                            name={`cars[${index}].year`}
                            placeholder="Рік"
                            type="number"
                            className="w-1/2 p-2 border rounded-md"
                          />
                          <ErrorMessage
                            name={`cars[${index}].year`}
                            component="div"
                            className="text-red-500 text-sm"
                          />

                          {values.cars.length > 1 && (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-500 mt-2"
                            >
                              Видалити авто
                            </button>
                          )}
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        push({
                          make: "",
                          model: "",
                          bodyType: "",
                          fuelType: "",
                          year: "",
                        })
                      }
                      className="w-full bg-[#00FF91] text-white py-2 rounded-lg mt-4"
                    >
                      Додати авто
                    </button>
                  </div>
                )}
              </FieldArray>

              <button
                type="submit"
                className="w-full mt-6 bg-[#00FF91] text-white py-2 rounded-lg"
              >
                Відправити
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FeedbackForm;
