import { useState } from 'react'
import Showslist from './Showslist';
import './App.css'
import scrapingData from '../storage/key_value_stores/default/results.json';

function App() {
	const [genre, setGenre] = useState(null);

	return (
		<>
			<div className='app'>
				<div className="app-container">
					<header className='app-header'>
						<h1 className='app-title'>Netflix Web Show Recommender</h1>
						<select
							name="genre"
							className='app-genre-select'
							onChange={e => setGenre(e.target.value)}
						>
							<option name="genre" value="">Select a genre</option>
							{scrapingData[0].genres.map((genre, index) => (
								<option name="genre" key={index} value={index}>{genre}</option>
							))}
						</select>
					</header>
					<main className={`app-body ${genre && "display"}`}>
						{genre && <Showslist shows={scrapingData[0].shows[genre]} />}
					</main>
					<footer>
						Made with ❤ by RyanTk03<br />
						See <a href="/disclaimer" target="_blank">Project Disclaimer</a>
					</footer>
				</div>
			</div>
		</>
	);
}

export default App
