import React from 'react';
import propEq from 'ramda/src/propEq';
import filter from 'ramda/src/filter';
import useAppReducer from '../lib/useAppReducer';
import FormSection from './FormSection';

const typeEq = propEq('type');

const partitionSubLists = list => [
	filter(typeEq('good'), list),
	filter(typeEq('bad'), list),
	filter(typeEq('next'), list)
];

const App = () => {
	const { state, dispatch } = useAppReducer();
	const { list, editing } = state;
	const [good, bad, next] = partitionSubLists(list);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='title-app'>Retrospective</h1>
			</header>
			<div id='app'>
				<FormSection
					type='good'
					title='What went well?'
					list={good}
					editing={editing}
					dispatch={dispatch}
				/>
				<FormSection
					type='bad'
					variant='vote'
					title='What needs improvement?'
					list={bad}
					editing={editing}
					dispatch={dispatch}
				/>
				<FormSection
					type='next'
					title='What to try next time'
					list={next}
					editing={editing}
					dispatch={dispatch}
				/>
			</div>
			<footer>
				<p>footer</p>
			</footer>
		</div>
	);
};

export default App;
