import * as actiontypes from "../actiontypes";
import { Action } from "../actions";
import reducers from ".";

interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoryState = initialState,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case actiontypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case actiontypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case actiontypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

export type RootState = ReturnType<typeof reducers>;
