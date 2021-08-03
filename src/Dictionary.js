import React, { useState } from "react";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function search(event) {
		event.preventDefault();
		alert(`Searching for the definition of ${keyword}`);
	}

	function handleKeywordSearch(event) {
		event.preventDefault();
		setKeyword(event.target.value);
	}

	return (
		<div className="Dictionary">
			<form onSubmit={search}>
				<input
					type="search"
					placeholder="Search for a word"
					onChange={handleKeywordSearch}
				/>
			</form>
		</div>
	);
}
