import React from 'react';
import ConcernItem from './concern-item';
import ConcernField from './concern-field';

const ConcernList = props => {
	const { editing, filteredConcerns: concerns, title, type, actions } = props;

	return (
		<div>
			{title && <h2>{title}</h2>}
			<ConcernField {...{ type, addConcern: actions.addConcern }} />
			{concerns.length > 0 && (
				<ul>
					{concerns.map(c => (
						<ConcernItem {...{ key: c.id, editing, ...c, ...actions }} />
					))}
				</ul>
			)}
		</div>
	);
};

export default ConcernList;
