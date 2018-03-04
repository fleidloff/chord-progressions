var teoria = require('teoria'),
    teoriaChordProgression = require('./ChordProgressions');

import randomItemFromArray from "./randomItemFromArray";



function toChordProgression(note = 'c', scale = 'ionian', nrChords = 4) {
	var chords = generateRandomChordProgression(nrChords);
	var result = teoriaChordProgression(teoria.scale(note, scale), chords, 4);
	return result.chords.map(chord => chord);
}

function generateRandomChordProgression(nrChords) {
	var result = [ 1 ];

	for (var i = 1; i < nrChords; i++) {
		result.push(randomItemFromArray(progressions[result[result.length - 1]]));
	}

	return result;
}

const progressions = {
	1: [ 4, 4, 4, 4, 5, 5, 6, 6, 2, 3 ],
	2: [ 5, 5, 5, 5, 4, 4, 6, 6, 1, 3 ],
	3: [ 6, 6, 6, 6, 4, 4, 1, 2, 5 ],
	4: [ 5, 5, 5, 5, 1, 1, 2, 2, 3, 6 ],
	5: [ 1, 1, 1, 1, 1, 4, 4, 6, 6, 2, 3 ],
	6: [ 2, 2, 2, 2, 5, 5, 3, 3, 4, 1 ]
}

export default toChordProgression;
