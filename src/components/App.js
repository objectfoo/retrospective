import React from 'react';
import propEq from 'ramda/src/propEq';
import filter from 'ramda/src/filter';
import Layout from './Layout';
import useAppReducer from '../lib/useAppReducer';
import useLocalStorage from '../lib/useLocalStorage';

const typeEq = propEq('type');

const partitionSubLists = list => [
	filter(typeEq('good'), list),
	filter(typeEq('bad'), list),
	filter(typeEq('next'), list)
];

const App = () => {
	const { state, dispatch } = useAppReducer();
	useLocalStorage(state, dispatch);
	const [good, bad, next] = partitionSubLists(state.list);

	return (
		<Layout
			editing={state.editing}
			dispatch={dispatch}
			good={good}
			bad={bad}
			next={next}
		/>
	);
};

export default App;
