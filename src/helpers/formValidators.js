const isValidPassword = (password) =>
  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password);

export const validateSignUpForm = (values) => {
  const { email, password, firstName, lastName } = values;
  const errors = {};
  if (!email) {
    Object.assign(errors, {
      email: "Please enter a valid Email Address",
    });
  }
  if (!password) {
    Object.assign(errors, {
      password: "Please enter a valid assword",
    });
  } else if (!isValidPassword(password)) {
    Object.assign(errors, {
      password: [
        "Your password must be between 8 to 16 characters.",
        "It must contain atleast 1 alphabet, 1 digit and any of these !@#$%^&* special characters",
      ],
    });
  }
  if (!firstName || typeof firstName !== "string") {
    Object.assign(errors, {
      firstName: "Please enter your First Name",
    });
  }
  if (!lastName || typeof lastName !== "string") {
    Object.assign(errors, {
      lastName: "Please enter your Last Name",
    });
  }
  return errors;
};

export const validateLoginForm = (values) => {
  const { email, password } = values;
  const errors = {};
  if (!email) {
    Object.assign(errors, {
      email: "Please enter a valid Email Address",
    });
  }
  if (!password || !isValidPassword(password)) {
    Object.assign(errors, {
      password: "Please enter a valid assword",
    });
  }
  return errors;
};
