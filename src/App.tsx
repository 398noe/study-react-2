import React from "react";
import './App.css';
import Thread from "./components/Thread";
import CreateThread from "./components/CreateThread";
import NotFound from "./components/NotFound";
import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";

interface props { }

export const App: React.FC = (props: props) => {
	return (
		<div className="App">
			<Layout>
				<Routes>
					<Route path="/" element={<Thread />} />
					<Route path="/threads/new" element={<CreateThread />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
