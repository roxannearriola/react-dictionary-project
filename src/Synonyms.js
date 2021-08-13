import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
	if (props.synonyms.length > 0) {
		return (
			<div className="Synonyms d-none d-sm-block">
				<ul>
					<strong>SIMILAR:</strong>
					{props.synonyms.map(function (synonyms, index) {
						return (
							<li key={index} className="word-synonyms">
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
