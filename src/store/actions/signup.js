import apiAction from "../../helpers/apiHelper";

export const signup = (user, cb) => {
  return apiAction({
    url: `/users`,
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
    label: "",
  });
};
