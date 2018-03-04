import React from "react";

export default function Chord({ chord }) {
	console.log("chord", chord);
	return <div className="Chord">{chord.name.replace(chord.symbol, ` ${chord.symbol}`)}</div>
}
