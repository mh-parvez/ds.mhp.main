import "./App.css";
import { Button, Color, Text } from "@ds.mhp/react/lib";

const App = () => {
	return (
		<div>
			<h1>Hello! MonoRepo</h1>
			<Color hexcode="#ffffff" width='xxl' height='xxl'/>
			<Text size="xl">Created by @mhp.dev</Text>
			<Button title='monorepo button' onClick={() => alert("Hey 🔥")}>
				Click Me!
			</Button>
		</div>
	);
};

export default App;
