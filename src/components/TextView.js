import React from 'react';

const TextView = props => {
	const { children, id, ...rest } = props;

	return (
		<div {...rest}>
			<div className='form-entry'>{children}</div>
		</div>
	);
};

export default TextView;
