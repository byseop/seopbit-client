import { combineReducers } from 'redux';
import marketSlice from './markets';

const rootReducer = combineReducers({
  markets: marketSlice.reducer
});

export default rootReducer;
export type RootReducerTypes = ReturnType<typeof rootReducer>;
