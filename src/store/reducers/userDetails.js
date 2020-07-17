import {
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILED,
  USER_DETAILS,
} from "../actions/types/userDetails";
import { API_START, API_END } from "../actions/types/api";

export default (
  state = { apiErrors: null, user: {}, isLoading: false },
  action
) => {
  switch (action.type) {
    case USER_DETAILS_SUCCESS:
      return { ...state, user: action.payload };
    case USER_DETAILS_FAILED:
      return { ...state, apiErrors: action.error };
    case API_START:
      if (action.payload === USER_DETAILS) {
        return {
          ...state,
          isLoading: true,
        };
      }
      break;
    case API_END:
      if (action.payload === USER_DETAILS) {
        return {
          ...state,
          isLoading: false,
        };
      }
      break;
    default:
      return state;
  }
};
