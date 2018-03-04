import React from "react";
import Chord from "./Chord";
import { withConsumer } from "../context"; 

export default withConsumer(({ state }) => <div className="pure-g">
	{state.chords.map((chord, idx) => <div key={idx} className="pure-u-1 pure-u-sm-1-4">
		<Chord chord={chord} />
	</div>)}
</div>);
