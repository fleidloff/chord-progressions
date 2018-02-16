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

console.log(toChordProgression('c', 'ionian', generateRandomChordProgression(4)));