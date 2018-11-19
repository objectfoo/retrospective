import { useReducer } from 'react';
// import debounce from 'debounce';
import uuidv4 from 'uuid/v4';

const defaultState = {
	editing: null,
	list: []
};

const TYPES = {
	ADD_ITEM: 'ADD_ITEM',
	DEL_ITEM: 'DEL_ITEM',
	UPDATE_ITEM: 'UPDATE_ITEM',
	SET_EDITING: 'SET_EDITING'
};

/**
 * Action Creators
 */
const addItem = (type, text) => {
	return {
		type: TYPES.ADD_ITEM,
		data: {
			id: uuidv4(),
			type,
			text
		}
	};
};

const delItem = id => {
	return {
		type: TYPES.DEL_ITEM,
		data: {
			id
		}
	};
};

const setEditing = id => {
	return {
		type: TYPES.SET_EDITING,
		data: {
			id
		}
	};
};

const updateItem = (id, text) => {
	return {
		type: TYPES.UPDATE_ITEM,
		data: {
			id,
			text
		}
	};
};

const actions = {
	addItem,
	delItem,
	setEditing,
	updateItem
};

/**
 * reducer
 */
function appReducer(state, action = {}) {
	let newState;

	switch (action.type) {
		case TYPES.ADD_ITEM:
			newState = {
				...state,
				list: [action.data].concat(state.list)
			};
			break;
		case TYPES.DEL_ITEM:
			newState = {
				...state,
				list: state.list.filter(i => i.id !== action.data.id)
			};
			break;
		case TYPES.UPDATE_ITEM:
			newState = {
				...state,
				editing: null,
				list: state.list.map(i => {
					if (i.id === action.data.id) {
						return {
							...i,
							...action.data
						};
					}
					return i;
				})
			};
			break;
		case TYPES.SET_EDITING:
			const newEditing =
				action.data.id === state.editing ? null : action.data.id;
			newState = {
				...state,
				editing: newEditing
			};
			break;
		default:
			newState = state;
			break;
	}

	return newState;
}

/**
 * default export composed reducer
 */
export default function useAppReducer() {
	const [state, dispatch] = useReducer(appReducer, defaultState);
	return { state, dispatch };
}

/**
 * named exports
 */
export { actions, defaultState, TYPES };
