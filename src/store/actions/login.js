import apiAction from "../../helpers/apiHelper";

export const login = (user, cb) => {
  return apiAction({
    url: `/login`,
    method: "POST",
    data: user,
    onSuccess: (data) => {
      typeof cb === "function" && cb(null, data);
      return { type: "" };
    },
    onFailure: (error) => {
      typeof cb === "function" && cb(error);
      return { type: "" };
    },
  });
};
