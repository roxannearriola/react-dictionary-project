import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
	let [keyword, setKeyword] = useState(props.defaultKeyword);
	let [results, setResults] = useState(null);
	let [loaded, setLoaded] = useState(false);
	let [photos, setPhotos] = useState(null);
	let [error, setError] = useState(false);

	function handleDictionaryResponse(response) {
		setResults(response.data[0]);
	}

	function handlePexelsResponse(response) {
		setPhotos(response.data.photos);
	}

	function handleSubmit(event) {
		event.preventDefault();
		search();
	}

	function search() {
		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		setError(false);
		axios
			.get(apiUrl)
			.then(handleDictionaryResponse)
			.catch((error) => {
				if (error.response.status === 404) {
					setError(true);
				}
			});

		const pexelsApiKey =
			"563492ad6f9170000100000195eb587fb30045c5b6d6a285f9580bd5";
		let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
		let headers = { Authorization: `Bearer ${pexelsApiKey}` };
		axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
								<div className="input-group form-input">
									<input
										type="search"
										className="form-control search-input"
										placeholder="Search for a word"
										aria-label="Search for a word"
										aria-describedby="search"
										onChange={handleKeywordChange}
									/>
									<div className="input-group-append form-submit">
										<button type="submit" className="btn submit-button">
											Search
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<Results results={results} error={error} />
					<Photos photos={photos} error={error} />
				</div>
			</div>
		);
	} else {
		load();
		return "Loading...";
	}
}
