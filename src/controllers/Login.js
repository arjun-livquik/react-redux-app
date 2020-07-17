import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { validateLoginForm } from "../helpers/formValidators";
import { CenterBox, MyPaper, FormActionWrapper } from "../components/CustomUI";
import { login } from "../store/actions/login";
import { Link } from "react-router-dom";

const Login = ({ history, ...props }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <Container>
      <CenterBox>
        <MyPaper padding="2">
          <h4>Login</h4>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validate={validateLoginForm}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(
                login(values, (err, data) => {
                  setSubmitting(false);
                  if (data) {
                    const { accessToken, refreshToken } = data;
                    localStorage.setItem(
                      "USER",
                      JSON.stringify({ accessToken, refreshToken })
                    );
                    history.push("/admin/dashboard");
                    return;
                  }
                  alert(err);
                })
              );
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Input
                  title="Please enter Email Address"
                  id="email"
                  type="email"
                  autoFocus
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && errors.email}
                />
                <Input
                  title="Please enter Password"
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && errors.password}
                />
                <FormActionWrapper>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                  <span>
                    Not a member yet? <Link to="/signup">Register</Link>
                  </span>
                </FormActionWrapper>
              </form>
            )}
          </Formik>
        </MyPaper>
      </CenterBox>
    </Container>
  );
};

export default connect()(Login);
