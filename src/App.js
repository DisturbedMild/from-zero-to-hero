import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Fragment>
			<Header />
      <main>
			<Routes>
				<Route path="home" element={<HomePage/>}/>
				<Route path="about"/>
				<Route path="registration"/>
			</Routes>
			</main>
    </Fragment>
  );
}

export default App;
