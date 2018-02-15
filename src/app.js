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
	var result = [ 1 ];

	for (var i = 1; i < nrChords; i++) {
		result.push(nextChord(result[result.length - 1]));
	}

	return result;
}

function nextChord(position = 1) {
	// todo: decide randomly on position
	const random = Math.floor(Math.random()*100);
	var followPosition = 0;

	if (random > 90) {
		followPosition = 4; 
	}

	if (random > 80) {
		followPosition = 3; 
	}

	if (random > 60) {
		followPosition = 2; 
	}

	if (random > 40) {
		followPosition = 1; 
	}

	return progressions[position][followPosition];
}

const progressions = {
	1: [ 4, 5, 6, 2, 3],
	2: [ 5, 4, 6, 1, 3],
	3: [ 6, 4, 1, 2, 5],
	4: [ 5, 1, 2, 3, 6],
	5: [ 1, 4, 6, 2, 3],
	6: [ 2, 5, 3, 4, 1]
}

console.log(toChordProgression('c', 'ionian', generateRandomChordProgression(4)));