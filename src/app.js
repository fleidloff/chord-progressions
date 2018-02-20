var teoria = require('teoria'),
    teoriaChordProgression = require('teoria-chord-progression');



function toChordProgression(note = 'c', scale = 'ionian', chords = [2, 5, 1]) {
	console.log(note, scale, teoria.note(note).scale(scale).simple());
	// create teoria.scale object
	var cMajorScale = teoria.scale(note, scale);

	// construct a diatonic chord progression
	var twoFiveOne = teoriaChordProgression(cMajorScale, chords);

	// or pass chord length argument to build 7th chords
	var result = teoriaChordProgression(cMajorScale, chords, 4);

	return result.chords.map(chord => chord.name);
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

var scales = [ 'aeolian', 'blues', 'dorian', 'harmonicminor', 'ionian', 'lydian', 'melodicminor', 'mixolydian', 'phrygian' ];
var notes = [ 'c', 'c#', 'db', 'd', 'd#', 'eb', 'e', 'f', 'f#', 'gb', 'g', 'g#', 'ab', 'a', 'a#', 'bb', 'b'];
function printChords() {
	try {
		console.log(toChordProgression(randomItemFromArray(notes), randomItemFromArray(scales), generateRandomChordProgression(4)));
		console.log("");
	} catch (ex) {
		// todo: catching is needed probably because of double sharps (e.g. gx)
		// todo: use enharmonics
	}
	
}

// console.log(toChordProgression("fb", "harmonicminor", generateRandomChordProgression(4)));

for (let i = 0; i < 1; i++) {
	printChords();
}
