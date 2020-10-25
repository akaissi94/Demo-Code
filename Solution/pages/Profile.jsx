import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import ProfileMain from "../components/ProfileMain";
import Footer from "../components/Footer";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let userInfo = this.props.userInfo;
    return (
      <div>
        <Header />
        <MainMenu userInfo={userInfo} shouldSearchExpand={true} />
        <ProfileMain />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.loginReducer.userInfo,
});

export default connect(mapStateToProps, null)(Profile);
