import RegistrationForm from "../components/Auth/RegistrationForm";

import classes from "./RegistrationPage.module.css";


const RegistrationPage = () => {

  return (
    <section className={classes.registration}>
      <RegistrationForm/>
    </section>
  );
};

export default RegistrationPage;
