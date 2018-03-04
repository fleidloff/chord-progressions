import React from "react";
import Chord from "./Chord";
import Chords from "./Chords";
import Header from "./Header";
import { Provider } from "../context";
import getChords from "../lib/getChords";
import "../../less/style.less";

export default class Main extends React.Component {
	
	actions = {
		random: (ev) => {
			ev && ev.preventDefault();
			this.setState(getChords(this.state.selected));
		},
		onChangeSelectedNote: (ev) => {
			this.setState({ selected: { note: ev.target.value, scale: this.state.selected.scale } });
		},
		onChangeSelectedScale: (ev) => {
			this.setState({ selected: { scale: ev.target.value, note: this.state.selected.note } });
		}
	};

	state = {
		note: null, 
		scale: null,
		scaleNotes: null,
		chords: [],
		selected: {
			note: "random", // "f"
			scale: "random" // "dorian"
		}
	};	

	componentDidMount() {
		this.setState(getChords({ note: "c", scale: "major" }))
	}

	render() {
		return <Provider value={{ state: this.state, actions: this.actions }}>
		  	<Header />
		  	<Chords />
		  	<br />
			<div>use this scale: {this.state.scaleNotes}</div>
		</Provider>
	}
}
