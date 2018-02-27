import teoria from "teoria";

export default function getScale(note, scale) {
	return note, scale, teoria.note(note).scale(scale).simple();
}
