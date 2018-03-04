import React from "react";
import Chord from "./Chord";
import { withConsumer } from "../context"; 

export default withConsumer(({ state }) => <div className="pure-g">
	{state.chords.map((chord, idx) => <div class="pure-u-1 pure-u-sm-1-4">
		<Chord key={idx} chord={chord} />
	</div>)}
</div>);
