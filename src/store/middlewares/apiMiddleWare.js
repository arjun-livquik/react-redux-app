// @flow

import axios from "axios";
import { API } from "../actions/types/api";
import { apiError, apiStart, apiEnd } from "../actions/api";
import { getAuthorizationHeader } from "../../helpers/apiHelper";

type Data = {};

type Headers = {};

type Payload = {
  url: string,
  method: string,
  data: Data,
  onSuccess: Function,
  onFailure: Function,
  label: string,
  headers: Headers,
};

type Action = {
  type: string,
  payload: Payload,
};

type Props = {
  dispatch: Function,
};

const apiMiddleware: (Props) => (Function) => (Action) => void = ({
  dispatch,
}) => (next) => (action) => {
  if (!action) {
    return;
  }
  next(action);

  if (action.type !== API) {
    return;
  }

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    headers,
    hasAuthHeader,
  } = action.payload;

  const dataOrParams: string = ["GET", "DELETE"].includes(method)
    ? "params"
    : "data";

  // axios default configs
  axios.defaults.baseURL =
    process.env.REACT_APP_BASE_URL || "http://localhost:8000";
  axios.defaults.headers.common["Content-Type"] = "application/json";

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      headers: hasAuthHeader
        ? Object.assign({}, headers, getAuthorizationHeader())
        : headers,
      [dataOrParams]: data,
    })
    .then(({ data: res }) => {
      dispatch(onSuccess(res));
    })
    .catch(({ response, ...error }) => {
      const { data } = response || {};
      const { message } = data || {};
      dispatch(apiError(message || error.message));
      dispatch(onFailure(message || error.message));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
