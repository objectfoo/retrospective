import React, {  useRef } from 'react';

const stopEvent = e => {
	e.preventDefault();
	e.stopPropagation();
};

const Field = props => {
	const { onSubmit, onKeyDown, hidden, initialValue = '', inputProps = {}, type } = props;
	const inputRef = useRef(null);

	return (
		<form
			hidden={hidden}
			noValidate
			autoComplete='off'
			onSubmit={e => {
				stopEvent(e);
				const fld = e.target.elements['text-input'];
				if (onSubmit) onSubmit({ type, text: fld.value.trim() });
			}}
		>
			<input
				name="text-input"
				className='item-input'
				type='text'
				{...inputProps}
				ref={inputRef}
				defaultValue={initialValue}
				onKeyDown={e => {
					if (e.key === 'Escape' || e.keyCode === 27) {
						stopEvent(e);
						inputRef.current.blur();
					}
					if (onKeyDown) onKeyDown(e);
				}}
			/>
		</form>
	);
};

export default Field;
