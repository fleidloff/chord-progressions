import React from "react";

export default function Chord({ chord }) {
	return <div className="Chord">{chord.name.replace(chord.symbol, ` ${chord.symbol}`)}</div>
}
