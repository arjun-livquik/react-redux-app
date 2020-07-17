import React from "react";
import { connect } from "react-redux";
import AdminContainer from "../../components/AdminContainer";

const Profile = ({ history, ...props }) => {
  return (
    <AdminContainer>
      <h1> Profile</h1>
    </AdminContainer>
  );
};

export default connect()(Profile);
