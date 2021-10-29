import MemeForm from "./MemeForm";
import Meme from './Meme';
import { useSelector } from 'react-redux';

function App() {

	const memes = useSelector(store => store.memes);

	return (
		<div className="App">
			<MemeForm/>
			<div className="meme-container">
				{memes.map(m => <Meme data={m}/>)}
			</div>
		</div>
	);
}

export default App;
