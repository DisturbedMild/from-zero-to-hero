import { useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from  'react-router-dom';

import LoadingSpinner from "../UI/LoadingSpinner";
import { initialLoginSchema } from "./LoginSchema";
import AuthContext from "../../store/auth-context";
import classes from "./RegistrationForm.module.css";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);  
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (values) => {
    const sendLoginRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCs2GTon8qtb-kcvKdL3FxzApMwBnKjatQ",
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
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();

        authCtx.login(data.idToken);
        navigate('/', {replace: true});
      } catch (err) {
        throw new Error(err.message);
      }
    };
    sendLoginRequest();
    setIsLoading(false);
  };
  return (
    <Formik
      validationSchema={initialLoginSchema}
      initialValues={{ email: "", password: "" }}
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

export default SignInForm;
