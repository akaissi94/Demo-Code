import React from "react";
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
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      userInfo = JSON.parse(userInfo);
    }
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

export default Profile;
