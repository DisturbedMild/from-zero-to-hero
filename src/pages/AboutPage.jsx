import { NavLink } from 'react-router-dom';
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={classes.about}>
      <h1>10,000 Hourse rule.</h1>
      <div className={classes.inner}>
        <div className={classes.content}>
          <p>
            You’ve probably heard of the 10,000 hour rule, which was popularized
            by Malcolm Gladwell’s blockbuster book
            <a
              href="https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930"
              target="_blank"
              rel="noreferrer"
            >
              “Outliers.”
            </a>
            As Gladwell tells it, the rule goes like this: it takes 10,000 hours
            of intensive practice to achieve mastery of complex skills and
            materials, like playing the violin or getting as good as Bill Gates
            at computer programming.
          </p>
          <p>
            Gladwell describes one central study in particular, about which he
            writes: “their research suggests that once a musician has enough
            ability to get into a top music school, the thing that distinguishes
            one performer from another is how hard he or she works. That’s it.”
          </p>
        </div>
        <div className={classes.author}>
          <img
            src="https://www.hachettebookgroup.com/wp-content/uploads/2019/04/GLADWELL_final-jacket-photo_Celeste-Sloman.jpg"
            alt="#"
          />
          <a
            href="https://www.gladwellbooks.com/"
            target="_blank"
            rel="noreferrer"
          >
            Malcolm Gladwell
          </a>
        </div>
      </div>
      <div className={classes.project}>
        <h2>About Project</h2>
        <p>
          So, I created this project to help you become professional in your
          way.
        </p>
        <p>With this project you can start from small like 100hours and move
          from one point to another step by step.</p>
        <p>I hope everyone will get to the point and you will become a pro.</p>
				<NavLink to='../registration'>Start now</NavLink>
      </div>
    </section>
  );
};

export default AboutPage;
