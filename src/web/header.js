import React from 'react';

const style = {
	wrapper: {
		borderBottom: '1px solid rgba(0,0,0,0.6)',
		paddingBottom: '1rem',
		marginBottom: '1rem'
	}
};

const Header = props => {
	return (
		<div style={style.wrapper}>
			<h1>Retrospective</h1>
			<div>
				<button
					type='button'
					disabled={!props.hasConcerns}
					onClick={() => {
						props.resetConcerns();
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Header;
