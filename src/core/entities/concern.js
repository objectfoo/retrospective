const buildMakeConcern = ({ uuid }) => ({ id, type, text, vote = null }) => {
	if (type === undefined) {
		throw new Error('makeConcern() type is required');
	}

	const record = { id, text, type };

	if (vote !== undefined) {
		record.vote = vote;
	}

	if (id === undefined) {
		record.id = uuid();
	}

	return record;
};

export default buildMakeConcern;
