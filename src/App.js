import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
// import styled from "styled-components";
import {
	Home,
	Error,
	PrivateRoute,
	Checkout,
	Products,
	SingleProduct,
	About,
	Cart,
} from "./pages";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/error'>
						<Error />
					</Route>
					<Route exact path='/cart'>
						{" "}
						<Cart />{" "}
					</Route>
					<Route exact path='/products'>
						<Products />
					</Route>
					<Route
						exact
						path='/products/:id'
						children={<SingleProduct />}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
