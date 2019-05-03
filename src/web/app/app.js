import React from 'react';
import useAppState from './use-app-state';
import Section from '../concern-view/section';
import { concernsByType } from '../helpers';
import './app.css';

const App = () => {
	const { concerns, editing, actions } = useAppState();
	const sharedProps = { actions, editing };
	const hasConcerns = concerns.length > 0;

	return (
		<div className={'flex flex-col app-wrapper'}>
			<header className='flex header-wrapper'>
				<h1 className='header-headline'>Retrospective</h1>
				<div className='flex-grow' />
				<div className='flex flex-col header-btn-wrapper'>
					<button
						type='button'
						disabled={!hasConcerns}
						onClick={() => {
							actions.resetConcerns();
						}}
					>
						Reset
					</button>
				</div>
			</header>
			<div className='flex-grow app-main'>
				<Section
					type='good'
					title='What went well?'
					{...sharedProps}
					filteredConcerns={concernsByType(concerns, 'good')}
				/>
				<Section
					type='bad'
					title='What needs improvement?'
					{...sharedProps}
					filteredConcerns={concernsByType(concerns, 'bad')}
				/>
				<Section
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
};

export default App;
