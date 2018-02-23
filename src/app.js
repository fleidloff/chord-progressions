import { html, render } from "lit-html";

import toChordProgression from "./lib/toChordProgression";
import randomItemFromArray from "./lib/randomItemFromArray";
import getScale from "./lib/getScale";

// todo: use custom elements 
// https://github.com/Polymer/lit-html/issues/28

const chordTemplate = (chord) => html`<div class="Chord">${chord}</div>`;
const chordsTemplate = (chords) => html`${chords.map(chord => chordTemplate(chord))}`;
const appTemplate = (note, scale, scaleNotes) => html`${note} ${scale} ${scaleNotes}`; 
const headerTemplate = () => html`<div>### click for random ###</div>`; 

const scales = [ 'aeolian', 'dorian', 'harmonicminor', 'ionian', 'lydian', 'melodicminor', 'mixolydian', 'phrygian' ];
const notes = [ 'c', 'c#', 'db', 'd', 'd#', 'eb', 'e', 'f', 'f#', 'gb', 'g', 'g#', 'ab', 'a', 'a#', 'bb', 'b'];


function renderApp({ note, scale }) {
	const chords = toChordProgression(note, scale, 4);
	render(headerTemplate(), document.getElementById("header"));
	render(chordsTemplate(chords), document.getElementById("chords"));
	render(appTemplate(note, scale, getScale(note, scale)), document.getElementById("app"));
}

function run() {
	const note = randomItemFromArray(notes);
	const scale = randomItemFromArray(scales);

	renderApp({ note, scale });
}

run();

document.getElementById("header").addEventListener("click", run);
