import React from 'react';
import ConcernItem from './item';
import ConcernField from './field';
import './section.css';

const Section = props => {
	const { editing, filteredConcerns: concerns, title, type, actions } = props;

	return (
		<div className='section-wrapper'>
			<h2 className='section-headline'>{title}</h2>
			<ConcernField {...{ type, addConcern: actions.addConcern }} />
			{concerns.length > 0 && (
				<ul className='section-list'>
					{concerns.map(c => (
						<li key={c.id}>
							<ConcernItem {...{ editing, ...c, ...actions }} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Section;
