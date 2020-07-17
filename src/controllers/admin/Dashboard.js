import React, { useEffect } from "react";
import { connect } from "react-redux";
import AdminContainer from "../../components/AdminContainer";
import { getProfile } from "../../store/actions/userDetails";

const Dashboard = ({ history, user, ...props }) => {
  const { firstName } = user;
  useEffect(() => {
    props.getProfile();
  }, []);
  return (
    <AdminContainer>
      <h1>Welcome {firstName}</h1>
    </AdminContainer>
  );
};

const mapStateToProps = ({ userDetails }) => ({
  user: userDetails.user,
  isLoading: userDetails.isLoading,
  errors: userDetails.errors,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: () => dispatch(getProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
