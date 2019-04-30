import React from 'react';
import './header.css';

const Header = props => {
	return (
		<header className='flex header-wrapper'>
			<h1 className='header-headline'>Retrospective</h1>
			<div className='flex-grow' />
			<div className='flex flex-col header-btn-wrapper'>
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
		</header>
	);
};

export default Header;
