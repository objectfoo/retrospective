import React from 'react';
import useAppState from './use-app-state';
import ConcernSection from './concern-section';
import Header from './header';
import { concernByType } from './helpers';

function App() {
	const { concerns, editing, actions } = useAppState();
	const hasConcerns = concerns.length > 0;
	const sharedProps = { actions, editing };

	return (
		<>
			<header>
				<Header {...{ resetConcerns: actions.resetConcerns, hasConcerns }} />
			</header>
			<div>
				<ConcernSection
					type='good'
					title='What went well?'
					{...sharedProps}
					filteredConcerns={concernByType(concerns, 'good')}
				/>
				<ConcernSection
					type='bad'
					title='What needs improvement?'
					{...sharedProps}
					filteredConcerns={concernByType(concerns, 'bad')}
				/>
				<ConcernSection
					type='next'
					title='What should we try next time?'
					{...sharedProps}
					filteredConcerns={concernByType(concerns, 'next')}
				/>
			</div>
			<footer>
				<p>copy</p>
			</footer>
		</>
	);
}

export default App;
