import React from "react";
import { withConsumer } from "../context"; 
import { notes, scales } from "../lib/data";


export default withConsumer(({ state, actions }) => (
	<div>
		<form className="pure-form">
			<div className="pure-g Navigation">
			    <div className="pure-u-1 pure-u-sm-2-5">
			  		<select onChange={actions.onChangeSelectedNote} id="note" value={state.selected.note}>
			        	{[ "random", ...notes ].map((note, idx) => <option key={idx} value={note}>{note}{note === "random" && ` (${state.note})`}</option>)}
			        </select>
			    </div>
			    <div className="pure-u-1 pure-u-sm-1-5"><br /></div>
			    <div className="pure-u-1 pure-u-sm-2-5">
			        <select onChange={actions.onChangeSelectedScale} id="scale" value={state.selected.scale}>
			        	{[ "random", ...scales ].map((scale, idx) => <option key={idx} value={scale}>{scale}{scale === "random" && ` (${state.scale})`}</option>)}
			        </select>
		        </div>
			</div>
			<br />
			<button onClick={actions.random} className="pure-button">new chords</button>
        </form>
	</div>
));

