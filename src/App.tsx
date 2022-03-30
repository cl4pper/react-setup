import React from 'react';
import { Text } from '@components';
// STYLE
import './App.scss';

const App = (): JSX.Element => {
	return (
		<div className="App">
			<span className="App__title">
				<Text id="app" content="react-setup" size="lg" />
			</span>
		</div>
	);
};

export default App;
