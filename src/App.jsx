import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'
import RegistrationPage from './pages/RegistrationPage';

function App() {
  return (
    <Fragment>
			<Header />
      <main>
			<Routes>
				<Route path='/' element={<Navigate to="/home"><HomePage/></Navigate>} />
				<Route path="home" element={<HomePage/>}/>
				<Route path="about" element={<AboutPage/>} />
				<Route path="registration" element={<RegistrationPage/>} />
			</Routes>
			</main>
    </Fragment>
  );
}

export default App;
