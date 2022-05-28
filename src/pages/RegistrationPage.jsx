import { useState, Fragment } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

import classes from "./RegistrationPage.module.css";

const initialSchema = yup.object({
  email: yup.string().email().required("Email field required"),
  password: yup
    .string()
    .required("Password should contain at list 6 characters")
    .min(6)
    .trim(),
  passwordComfirmation: yup
    .string()
    .when("password", {
      is: true,
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Both passwords should be the same"),
    })
    .required("Both passwords should be the same"),
});

const RegistrationPage = () => {
  const [isLogginIn, setIsLogginIn] = useState(true);

  const signHandler = () => {
    setIsLogginIn(!isLogginIn);
  };
  return (
    <section className={classes.registration}>
      <Formik initialValues={initialSchema}>
        <Form>
          <label>Email:</label>
          <Field type="email" name="email" id="email" />

          <label>Password:</label>
          <Field type="password" name="password" id="password" />

          {!isLogginIn && (
            <Fragment>
              <label>2-nd password:</label>
              <Field
                type="password"
                name="passwordConfirmation"
                id="passwordConfirmation"
              />
            </Fragment>
          )}
          <div className={classes.actions}>
            <button type="submit">Submit</button>
            <button onClick={signHandler}>{`${
              isLogginIn ? "Register" : "Login"
            }`}</button>
          </div>
        </Form>
      </Formik>
      ;
    </section>
  );
};

export default RegistrationPage;
