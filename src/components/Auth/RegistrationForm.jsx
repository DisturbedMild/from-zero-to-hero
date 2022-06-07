import { useState, Fragment } from "react";
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

import classes from './RegistrationForm.module.css';
const RegistrationForm = () => {
  const [isLogginIn, setIsLogginIn] = useState(true);


  const toggleFormTypeHandler = () => {
    setIsLogginIn(!isLogginIn);
  };

  return (
    <Fragment>
      {!isLogginIn ? <SignUpForm/> : <SignInForm/>}
      <button type="button" className={classes.switch} onClick={toggleFormTypeHandler}>{`${
						isLogginIn ? "Register Now" : "Login"
					}`}</button>
    </Fragment>
  );
};


export default RegistrationForm;