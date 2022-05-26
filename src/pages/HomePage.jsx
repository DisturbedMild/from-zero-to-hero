import Clock from '../components/clock/Clock';
import classes from './HomePage.module.css';

const HomePage = () => {
	return <section className={classes.home}>
			<h1 className={classes.header}>Just Start Today!</h1>
			<Clock/>
	</section>
}

export default HomePage;