import React from "react";
import { withConsumer } from "../context"; 
import { notes, scales } from "../lib/data";


export default withConsumer(({ state, actions }) => (
	<div>
		<form class="pure-form">
			<div class="pure-g">
			    <div class="pure-u-1 pure-u-sm-1-3">
			    	<label for="note">Root</label><br />
			  		<select onChange={actions.onChangeSelectedNote} id="note" value={state.selected.note}>
			        	{[ "random", ...notes ].map((note, idx) => <option key={idx} value={note}>{note}</option>)}
			        </select>
			    </div>
			    <div class="pure-u-1 pure-u-sm-1-3">
				    <label for="scale">Scale</label><br />
			        <select onChange={actions.onChangeSelectedScale} id="scale" value={state.selected.scale}>
			        	{[ "random", ...scales ].map((scale, idx) => <option key={idx} value={scale}>{scale}</option>)}
			        </select>
		        </div>
			    <div class="pure-u-1 pure-u-sm-1-3">
			    	<br />
	 				<button onClick={actions.random} className="pure-button">new chords</button>
			    </div>
			</div>
        </form>
	</div>
));

