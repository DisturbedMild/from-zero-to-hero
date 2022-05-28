import { useEffect, useState, useCallback } from "react";
import { NavLink } from 'react-router-dom';
import classes from "./Clock.module.css";

const Clock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = useCallback(() => {
    setSeconds((prevState) => (prevState += 1));
    if (seconds > 59) {
      setSeconds(0);
      setMinutes((prevState) => (prevState += 1));
    }
    if (minutes === 60) {
      setMinutes(0);
      setHours((prevState) => (prevState += 1));
    }
  }, [seconds, minutes]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      getTime();
    }, 1000);
		return () => {
			clearTimeout(timerId)
		}
    // eslint-disable-next-line
  }, [seconds]);

  return (
    <div className={classes.clock}>
      <div className={classes.tiles}>
        <div>{hours < 10 ? "0" + hours : hours}:</div>
        <div>{minutes < 10 ? "0" + minutes : minutes}:</div>
        <div>{seconds < 10 ? "0" + seconds : seconds}</div>
      </div>
      <div className={classes.labels}>
        <div>Hours</div>
        <div>Mins</div>
        <div>Secs</div>
      </div>
      <div className={classes.btn}>
      <NavLink to="/registration">Start Now</NavLink>
      </div>
    </div>
  );
};

export default Clock;
