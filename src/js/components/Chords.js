import React from "react";
import Chord from "./Chord";
import { withConsumer } from "../context"; 

export default withConsumer(({ state }) => state.chords.map((chord, idx) => <Chord key={idx} chord={chord} />));
