import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<div className="container">
				<div className="row meaning-row">
					<div className="col-sm-3 part-of-speech-column">
						<h3>{props.meaning.partOfSpeech}</h3>
					</div>

					<div className="col-sm-9 definition-column">
						{props.meaning.definitions.map(function (definition, index) {
							return (
								<div key={index} className="mb-4">
									<span className="definition">{definition.definition}</span>

									<Examples examples={definition.example} />

									<Synonyms synonyms={definition.synonyms} />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
