import Dictionary from "./Dictionary";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
	return (
		<div className="container">
			<div className="App">
				<header className="App-header">
					<h1 className="text-center mt-5">Dictionary App</h1>
				</header>
				<main>
					<Dictionary />
				</main>
				<footer className="text-center mt-4">
					<small>This project was coded by Roxanne A.</small>
				</footer>
			</div>
		</div>
	);
}
