import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import SearchArea from "../components/SearchArea";
import BrowseBooks from "../components/BrowseBooks";
import BookCategories from "../components/BookCategories";
import Advertisements from "../components/Advertisements";
import GeneralInfo from "../components/GeneralInfo";
import Footer from "../components/Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let userInfo = this.props.userInfo;
    return (
      <div>
        <Header />
        <MainMenu userInfo={userInfo} />
        <SearchArea userInfo={userInfo} />
        {/* <div className="spacing" /> */}
        <BrowseBooks userInfo={userInfo} />
        <BookCategories />
        <Advertisements userInfo={userInfo} />
        <GeneralInfo />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.loginReducer.userInfo,
});

export default connect(mapStateToProps, null)(Home);
