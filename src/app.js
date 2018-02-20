var teoria = require('teoria'),
    teoriaChordProgression = require('./lib/ChordProgressions');



function toChordProgression(note = 'c', scale = 'ionian', chords = [2, 5, 1]) {
	var result = teoriaChordProgression(teoria.scale(note, scale), chords, 4);
	return result.chords.map(chord => chord.name);
}

function getScale(note, scale) {
	return note, scale, teoria.note(note).scale(scale).simple();
}

function generateRandomChordProgression(nrChords) {
	var result = [ 1 ];

	for (var i = 1; i < nrChords; i++) {
		result.push(randomItemFromArray(progressions[result[result.length - 1]]));
	}

	return result;
}

function randomItemFromArray(items) {
	return items[Math.floor(Math.random()*items.length)];
}

const progressions = {
	1: [ 4, 4, 4, 4, 5, 5, 6, 6, 2, 3 ],
	2: [ 5, 5, 5, 5, 4, 4, 6, 6, 1, 3 ],
	3: [ 6, 6, 6, 6, 4, 4, 1, 2, 5 ],
	4: [ 5, 5, 5, 5, 1, 1, 2, 2, 3, 6 ],
	5: [ 1, 1, 1, 1, 1, 4, 4, 6, 6, 2, 3 ],
	6: [ 2, 2, 2, 2, 5, 5, 3, 3, 4, 1 ]
}

var scales = [ 'aeolian', 'dorian', 'harmonicminor', 'ionian', 'lydian', 'melodicminor', 'mixolydian', 'phrygian' ];
var notes = [ 'c', 'c#', 'db', 'd', 'd#', 'eb', 'e', 'f', 'f#', 'gb', 'g', 'g#', 'ab', 'a', 'a#', 'bb', 'b'];
function printChords() {
	try {
		let note = randomItemFromArray(notes);
		let scale = randomItemFromArray(scales);
		console.log(note, scale, getScale(note, scale));
		console.log(toChordProgression(note, scale, generateRandomChordProgression(4)));
		console.log("");
	} catch (ex) {
		// todo: catching is needed probably because of double sharps (e.g. gx)
		// todo: use enharmonics
	}
	
}
// todo: chordprogression-js: use harmonics    chordName = piu.name(piu.infer(chordNotes, true)[0]);
// console.log(toChordProgression("d#", "lydian", generateRandomChordProgression(4)));

for (let i = 0; i < 0; i++) {
	printChords();
}

let note = randomItemFromArray(notes);
let scale = randomItemFromArray(scales);
document.getElementById("app").innerHTML = note + " " + scale + " " + getScale(note, scale) + "</br><br />" + toChordProgression(note, scale, generateRandomChordProgression(4));
