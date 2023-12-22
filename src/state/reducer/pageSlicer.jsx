import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: '',
	navbarLink: ['Product', 'Features', 'Pricing']
};

const pageSlice = createSlice({
	name: 'pageSlice',
	initialState,
	reducers: {
		test: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { test } = pageSlice.actions;

export default pageSlice.reducer;
