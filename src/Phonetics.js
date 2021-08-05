import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
	let audio = new Audio(props.phonetics.audio);

	const start = () => {
		audio.play();
	};

	return (
		<div className="Phonetics">
			<em>[ {props.phonetics.text} ]</em>{" "}
			<i class="fas fa-volume-up" onClick={start}></i>
		</div>
	);
}
