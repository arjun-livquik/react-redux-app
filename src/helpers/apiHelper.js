import { API } from "../store/actions/types/api";

export const apiAction = ({
  url = "",
  method = "GET",
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  hasAuthHeader = false,
  headersOverride = null,
}) => {
  return {
    type: API,
    payload: {
      url,
      method,
      hasAuthHeader,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride,
    },
  };
};

export const getAuthorizationHeader = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  if (Object.keys(user).length) {
    return {
      Authorization: `Bearer ${user?.accessToken}`,
    };
  }
  return {};
};

export default apiAction;
