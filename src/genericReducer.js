export default (reducers) => {

	return (state, action) => {
		if (reducers[action.type]) {
			state = reducers[action.type](state, action.payload);
		}

		return state;
	};
};