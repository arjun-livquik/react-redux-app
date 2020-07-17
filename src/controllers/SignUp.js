import React from "react";
import { connect, useDispatch } from "react-redux";
import { Formik } from "formik";
import Input from "../components/Input";
import Container from "../components/Container";
import Button from "../components/Button";
import { validateSignUpForm } from "../helpers/formValidators";
import { signup } from "../store/actions/signup";
import { CenterBox, MyPaper, FormActionWrapper } from "../components/CustomUI";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <CenterBox>
        <MyPaper padding="2">
          <h4> Sign Up</h4>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstName: "",
              lastName: "",
            }}
            validate={validateSignUpForm}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(
                signup(values, (err, data) => {
                  const { message } = data || {};
                  setSubmitting(false);
                  if (!err) {
                    history.push("/login");
                  }
                  alert(err || message);
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
                <Input
                  id="firstName"
                  title="Please enter First Name"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  error={touched.firstName && errors.firstName}
                />
                <Input
                  id="lastName"
                  title="Please enter Last Name"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  error={touched.lastName && errors.lastName}
                />
                <FormActionWrapper>
                  <Button type="submit" disabled={isSubmitting}>
                    Send
                  </Button>
                  <span>
                    Already a member? <Link to="/login">Login</Link>
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

export default connect()(SignUp);
