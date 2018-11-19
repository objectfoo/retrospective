import React from 'react';
import propEq from 'ramda/src/propEq';
import filter from 'ramda/src/filter';
import useAppReducer from './lib/useAppReducer';
import FormList from './components/form-list/FormList';
import './App.css';

const filterGood = filter(propEq('type', 'good'));
const filterBad = filter(propEq('type', 'bad'));
// const isTypeBad = propEq('type', 'bad');
// const isTypeNext = propEq('type', 'next');

const App = props => {
	const { state, dispatch } = useAppReducer();
	const { list, editing } = state;
	const good = filterGood(list);
	const bad = filterBad(list);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Retrospective</h1>
			</header>
			<main id='app'>
				<FormList
					type='good'
					title='What went well?'
					list={good}
					editing={editing}
					dispatch={dispatch}
				/>
				<FormList
					type='bad'
					title='What needs improvement?'
					list={bad}
					editing={editing}
					dispatch={dispatch}
				/>
				{/*
				<FormList
					id='next'
					title='What to try next time'
					list={list}
					editing={editing}
				/>
				*/}
			</main>
			<footer>
				<p>footer</p>
			</footer>
		</div>
	);
};

export default App;
