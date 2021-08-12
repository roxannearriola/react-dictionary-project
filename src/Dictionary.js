import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);

	function handleResponse(response) {
		setResults(response.data[0]);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function search() {
		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	function handleKeywordChange(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	function load() {
		setLoaded(true);
		search();
	}

	if (loaded) {
		return (
			<div className="Dictionary">
				<div className="container">
					<div className="row">
						<div className="col">
							<form onSubmit={handleSubmit}>
								<div className="form-input">
									<input
										type="search"
										className="search-input"
										placeholder="Search for a word"
										onChange={handleKeywordChange}
									/>
									<div className="form-submit">
										<button type="submit" className="submit-button">
											Search
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<Results results={results} />
				</div>
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
