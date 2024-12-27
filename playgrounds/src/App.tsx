import "./App.css";
import { Button } from "@ds.mhp/react/lib";

const App = () => {
	return (
		<div>
			<h1>Hello! MonoRepo</h1>
			<p>Created by @mhp.dev</p>
			<Button title='monorepo button' onClick={() => alert("Hey 🔥")}>
				Click Me
			</Button>
		</div>
	);
};

export default App;
