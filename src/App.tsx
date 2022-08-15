import React from "react";
import './App.css';
import Thread from "./components/Thread";
import Layout from "./layout/Layout";

interface props { }

export const App: React.FC = (props: props) => {
	return (
		<div className="App">
			<Layout>
				<Thread />
			</Layout>
		</div>
	);
}

export default App;
