import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer.js';
import './css/skeleton.css';
import './css/normalize.css';
import './css/main.css'
import Home from './Home.js';
import registerServiceWorker from './registerServiceWorker';

const Header = () => (
	<header>
		<p className="title">Click below to see different kinds of dogs</p>
	</header>
)

const Main = () => (
	<main>
		<Home/>
	</main>
)

const App = () => (
	<div className="my-container">
		<Header/>
		<Provider store={store}>
			<Main/>
		</Provider>
	</div>
)

ReactDOM.render(
	(<App/>),document.getElementById('root')
);
registerServiceWorker();
