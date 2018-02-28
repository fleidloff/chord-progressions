import React from "react";
import Chord from "./Chord";
import Chords from "./Chords";
import Header from "./Header";
import { Provider } from "../context";
import getChords from "../lib/getChords";

export default class Main extends React.Component {
	
	actions = {
		random: () => {
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
		  	<Header foo="bar"/>
		  	<Chords />
		</Provider>
	}
}
