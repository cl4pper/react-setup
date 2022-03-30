import React from 'react';
import { Title } from '@components';
// STYLE
import './App.scss';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<span className="App__title">
				<Title id="app" content="react-setup" />
			</span>
		</div>
	);
};

export default App;
