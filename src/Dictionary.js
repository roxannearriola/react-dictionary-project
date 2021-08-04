import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function handleResponse(response) {
		console.log(response.data);
	}

	function search(event) {
		event.preventDefault();
		alert(`Searching for the definition of ${keyword}`);

		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					placeholder="Search for a word"
					onChange={handleKeywordChange}
				/>
			</form>
		</div>
	);
}
