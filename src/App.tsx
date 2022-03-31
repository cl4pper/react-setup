import React from 'react';
import { Title, Link } from '@components';
// STYLE
import './App.scss';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<span className="App__title">
				<Title id="app" content="react-setup" />
			</span>
			<Link id="app" label="Link" href="http://www.google.com" />
		</div>
	);
};

export default App;
