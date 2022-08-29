import { rootReducer } from "../services/reducers/index";
import { allActionTypes } from "../services/action/allActionTypes";

import { ThunkAction } from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>;
 
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, allActionTypes>;

export type AppDispatch<TReturnType = void> = (action: allActionTypes | AppThunk) => TReturnType;
