import React from 'react';
import useList from './lib/useList';
import useEditing from './lib/useEditing';
import FormList from './components/form-list/FormList';
import './App.css';

const App = props => {
	const list = useList([]);
	const editing = useEditing(null);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Retrospective</h1>
			</header>
			<main id='app'>
				<FormList
					id='good'
					title='What went well?'
					list={list}
					editing={editing}
				/>
				<FormList
					id='bad'
					title='What needs improvement?'
					list={list}
					editing={editing}
				/>
				<FormList
					id='next'
					title='What to try next time'
					list={list}
					editing={editing}
				/>
			</main>
			<footer>
				<p>footer</p>
			</footer>
		</div>
	);
};

export default App;
