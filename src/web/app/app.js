import React from 'react';
import useAppState from '../use-app-state';
import ConcernSection from '../concern/section';
import Header from '../header/header';
import { concernsByType } from '../helpers';
import './app.css';

function App() {
	const { concerns, editing, actions } = useAppState();
	const sharedProps = { actions, editing };

	return (
		<div className={'flex flex-col app-wrapper'}>
			<Header resetConcerns={actions.resetConcerns} hasConcerns={concerns.length > 0} />
			<div className='flex-grow app-main'>
				<ConcernSection
					type='good'
					title='What went well?'
					{...sharedProps}
					filteredConcerns={concernsByType(concerns, 'good')}
				/>
				<ConcernSection
					type='bad'
					title='What needs improvement?'
					{...sharedProps}
					filteredConcerns={concernsByType(concerns, 'bad')}
				/>
				<ConcernSection
					type='next'
					title='What should we try next time?'
					{...sharedProps}
					filteredConcerns={concernsByType(concerns, 'next')}
				/>
			</div>
			<footer>
				<p>copy</p>
			</footer>
		</div>
	);
}

export default App;
