import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
	if (props.synonyms) {
		return (
			<div className="Synonyms ">
				<ul>
					{props.synonyms.map(function (synonyms, index) {
						return (
							<li
								key={index}
								className="word-synonyms d-none d-sm-inline-block"
							>
								{synonyms}
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
}
