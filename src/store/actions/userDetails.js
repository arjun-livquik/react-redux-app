import apiAction from "../../helpers/apiHelper";
import {
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILED,
  USER_DETAILS,
} from "./types/userDetails";

const getProfileSuccess = (data) => ({
  type: USER_DETAILS_SUCCESS,
  payload: data,
});

const getProfileFailed = (data) => ({
  type: USER_DETAILS_FAILED,
  payload: data,
});

export const getProfile = (user, cb) => {
  return apiAction({
    url: `/users/profile`,
    hasAuthHeader: true,
    onSuccess: (data) => {
      typeof cb === "function" && cb(null, data);
      return getProfileSuccess(data);
    },
    onFailure: (error) => {
      typeof cb === "function" && cb(error);
      return getProfileFailed(error);
    },
    label: USER_DETAILS,
  });
};
