import { store } from "../services/reducers/store";
import { allActionTypes } from "../services/action/allActionTypes";

import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;
 
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, allActionTypes>;

export type AppDispatch<TReturnType = void> = (action: allActionTypes | AppThunk) => TReturnType;
