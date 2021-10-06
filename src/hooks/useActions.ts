import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreaters } from "../store";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreaters, dispatch);
  // return {searchRepostiries: dispatch(searchRepostiries)}
};
