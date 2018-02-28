import React from "react";
import { withConsumer } from "../context"; 
import Navigation from "./Navigation";

export default withConsumer(({ state }) => (
	<div>
		<Navigation />
  		<br /><br />
		<div>{state.note} {state.scale} {state.scaleNotes}</div>
		<br /><br />	
	</div>
));

