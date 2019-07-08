import React from 'react';
import Item from './item';
import Field from './field';
import './section.css';

const Section = props => {
	const { editing, filteredConcerns: concerns, title, type, actions } = props;
	const fProps = {
		type,
		onSubmit: data => {
			console.log('asdf', data);
			actions.addConcern(data);
		},
		inputProps: { id: type }
	};

	return (
		<div className='section-wrapper'>
			<label htmlFor={type}>
				<h2 className='section-headline'>{title}</h2>
			</label>
			<Field {...fProps} />
			{concerns.length > 0 && (
				<ul className='section-list'>
					{concerns.map(c => (
						<li key={c.id}>
							<Item {...{ editing, ...c, ...actions }} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Section;
