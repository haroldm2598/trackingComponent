import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './reducer/pageSlicer';

export const store = configureStore({
	reducer: { pageTemplate: pageReducer }
});
