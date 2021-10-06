import * as actiontypes from "../actiontypes";

interface SearchRepositoryAction {
  type: typeof actiontypes.SEARCH_REPOSITORIES;
}
interface SearchRepositoryActionSuccess {
  type: typeof actiontypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoryActionError {
  type: typeof actiontypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
export type Action =
  | SearchRepositoryAction
  | SearchRepositoryActionSuccess
  | SearchRepositoryActionError;
