import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
	if (props.results && !props.error) {
		return (
			<div className="Results">
				<h2>{props.results.word}</h2>
				{props.results.phonetics.map(function (phonetics, index) {
					return (
						<span key={index}>
							<Phonetics phonetics={phonetics} />
						</span>
					);
				})}

				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="Results-error">
				<h4 className="text-center">
					We couldn't find the definition of the word you were looking for. You
					can try searching another word.
				</h4>
			</div>
		);
	}
}
