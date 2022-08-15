import React from "react";
import './App.css';
import Thread from "./components/Thread";
import Layout from "./layout/Layout";
import { Routes, Route, Link } from "react-router-dom";
import CreateThread from "./components/CreateThread";
import NotFound from "./components/NotFound";

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
