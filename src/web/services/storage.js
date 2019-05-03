import { makeConcern } from '../../core/entities/index';

const toJson = str => JSON.parse(str);

const buildStorage = ({ localStorage, storeKey }) => {
	return {
		get: () => localStorage.get(storeKey),
		set:
	};
};

export default buildStorage;
