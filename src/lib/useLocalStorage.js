import { useEffect, useState } from 'react';
import { actions } from './useAppReducer';

const useLocalStorage = (state, dispatch) => {
	const [initialized, setInitialized] = useState(false);
	useEffect(() => {
		if (!initialized) {
			const data = localStorage.getItem('retrospective-store');

			if (data) {
				dispatch(actions.setAllLists(JSON.parse(localStorage.getItem('retrospective-store'))));
			}
		}
		setInitialized(true);
	});
	useEffect(() => {
		localStorage.setItem('retrospective-store', JSON.stringify(state.list));
	}, [state.list]);


};

export default useLocalStorage;
