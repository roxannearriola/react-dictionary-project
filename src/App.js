import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
	return (
		<div className="container">
			<div className="App">
				<header className="App-header">
					<h1 className="text-center">Dictionary</h1>
				</header>
				<main>
					<Dictionary defaultKeyword="hello" />
				</main>
				<footer className="text-center mt-4">
					<p>
						This project was coded by{" "}
						<a
							href="https://www.linkedin.com/in/roxanne-arriola/"
							target="_blank"
							rel="noreferrer"
						>
							Roxanne A.
						</a>{" "}
						and is{" "}
						<a
							href="https://github.com/roxannearriola/react-dictionary-project"
							target="_blank"
							rel="noreferrer"
						>
							open-sourced on GitHub
						</a>{" "}
						.
					</p>
				</footer>
			</div>
		</div>
	);
}
