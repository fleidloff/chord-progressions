var teoria = require('teoria'),
    teoriaChordProgression = require('teoria-chord-progression');



function toChordProgression(note = 'c', scale = 'ionian', chords = [2, 5, 1]) {
	// create teoria.scale object
	var cMajorScale = teoria.scale(note, scale);

	// construct a diatonic chord progression
	var twoFiveOne = teoriaChordProgression(cMajorScale, chords);

	// or pass chord length argument to build 7th chords
	var result = teoriaChordProgression(cMajorScale, chords, 4);

	return result.chords.map(chord => chord.name);
}

function generateRandomChordProgression(nrChords = 4) {
	// to be done!
	return [ 1, 2, 5, 1 ];
}

console.log(toChordProgression('c', 'ionian', [2, 5, 1]));