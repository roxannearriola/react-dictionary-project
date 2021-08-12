import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
	let audio = props.phonetics.audio;

	function playAudio() {
		const audioSound = new Audio(audio);
		audioSound.play();
	}

	return (
		<span className="Phonetics">
			<button className="listen-phonetics" onClick={playAudio}>
				{props.phonetics.text} <i className="fas fa-volume-up"></i>
			</button>
		</span>
	);
}
