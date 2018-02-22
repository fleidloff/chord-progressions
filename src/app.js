import { html, render } from "lit-html";

import toChordProgression from "./lib/toChordProgression";
import randomItemFromArray from "./lib/randomItemFromArray";
import getScale from "./lib/getScale";


const chordTemplate = (chord) => html`<div class="Chord">${chord}</div>`;
const chordsTemplate = (chords) => html`${chords.map(chord => chordTemplate(chord))}`;


const scales = [ 'aeolian', 'dorian', 'harmonicminor', 'ionian', 'lydian', 'melodicminor', 'mixolydian', 'phrygian' ];
const notes = [ 'c', 'c#', 'db', 'd', 'd#', 'eb', 'e', 'f', 'f#', 'gb', 'g', 'g#', 'ab', 'a', 'a#', 'bb', 'b'];

let note = randomItemFromArray(notes);
let scale = randomItemFromArray(scales);

document.getElementById("app").innerHTML = note + " " + scale + " " + getScale(note, scale) + "</br><br />";

//render(chordTemplate("Am7"), document.body);
const chords = toChordProgression(note, scale, 4);
render(chordsTemplate(chords), document.getElementById("chords"));
