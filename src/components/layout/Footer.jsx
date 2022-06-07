import GitHubIcon from "../UI/GitHubIcon";
import LinkedInIcon from "../UI/LinkedInIcon";
import TwitterIcon from "../UI/TwitterIcon";

import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.copy}>2022 Copyrights(C)</div>
      <div className={classes.social}>
        <GitHubIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
    </footer>
  );
};

export default Footer;
