import React from "react";
import { withConsumer } from "../context"; 
import { notes, scales } from "../lib/data";


export default withConsumer(({ state, actions }) => (
	<div>
  		<select onChange={actions.onChangeSelectedNote} value={state.selected.note}>
        	{[ "random", ...notes ].map((note, idx) => <option key={idx} value={note}>{note}</option>)}
        </select>
        <select onChange={actions.onChangeSelectedScale} value={state.selected.scale}>
        	{[ "random", ...scales ].map((scale, idx) => <option key={idx} value={scale}>{scale}</option>)}
        </select>
        <button onClick={actions.random}>click for random</button>
	</div>
));

