import randomItemFromArray from "./randomItemFromArray";
import toChordProgression from "./toChordProgression";
import getScale from "./getScale";
import { notes, scales } from "./data";

export default function getChords(opts = {}) {
	const note = opts.note !== "random" ? opts.note : randomItemFromArray(notes);
	const scale = opts.scale !== "random" ? opts.scale : randomItemFromArray(scales);

	return {
		note, 
		scale,
		scaleNotes: getScale(note, scale).join(", "),
		chords: toChordProgression(note, scale, 4)
	}
}
