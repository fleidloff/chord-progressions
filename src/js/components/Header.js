import React from "react";
import { withConsumer } from "../context"; 
import Navigation from "./Navigation";

export default withConsumer(({ state }) => (
	<div>
		<h1>Jam Chords</h1>
		<Navigation />
		<br />
	</div>
));

