import { useState } from "react";
import { Formik, Form, Field } from "formik";

import LoadingSpinner from "../UI/LoadingSpinner";
import { initialRegistrationSchema } from "./RegistrationSchema";
import classes from "./RegistrationForm.module.css";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (values, actions) => {
    const sendRegisterRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCs2GTon8qtb-kcvKdL3FxzApMwBnKjatQ",
          {
            method: "POST",
            body: JSON.stringify({
              email: values.email,
              password: values.password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        if (data.error.message === "EMAIL_EXISTS") {
          actions.setFieldError("email", "Email is already used");
        } else if (data.error) {
          throw new Error("Failed request");
        } else {
          setIsLoading(false);
          actions.resetForm();
        }
      } catch (err) {
        setIsLoading(false);
        throw new Error(err.message);
      }
      setIsLoading(false);
    };
    sendRegisterRequest();
  };

  return (
    <Formik
      validationSchema={initialRegistrationSchema}
      initialValues={{ email: "", password: "", passwordConfirmation: "" }}
      onSubmit={submitHandler}
    >
      {({ errors, touched }) => (
        <Form>
          <label>Email:</label>
          <Field type="email" name="email" id="email" />
          {errors.email && touched.email ? (
            <div className={classes["input-error"]}>{errors.email}</div>
          ) : null}
          <label>Password:</label>
          <Field type="password" name="password" id="password" />
          {errors.password && touched.password ? (
            <div className={classes["input-error"]}>{errors.password}</div>
          ) : null}
          <label>2-nd password:</label>
          <Field
            type="password"
            name="passwordConfirmation"
            id="passwordConfirmation"
          />
          {errors.passwordConfirmation && touched.passwordConfirmation ? (
            <div className={classes["input-error"]}>
              {errors.passwordConfirmation}
            </div>
          ) : null}
          <div className={classes.actions}>
            <button type="submit">
              {isLoading ? <LoadingSpinner /> : "Submit"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
