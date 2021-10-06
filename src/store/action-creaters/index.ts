import axios from "axios";
import { Dispatch } from "redux";
import * as ActionTypes from "../actiontypes";
import { Action } from "../actions";

export const searchRepostiries = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });
    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((results: any) => {
        return results.package.name;
      });
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};
