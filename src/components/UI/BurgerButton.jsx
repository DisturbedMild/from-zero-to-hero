import classes from './BurgerButton.module.css';

const BurgerButton = (props) => {
  return (
    <button
      className={`${classes.burger} ${props.isActive ? classes.active : ""}`}
			onClick={props.onClick}
    >
			<div></div>
			<div></div>
			<div></div>
		</button>
  );
};


export default BurgerButton;