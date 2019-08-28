import React from "react";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MainMenu />
        <SignupForm />
        <Footer />
      </div>
    );
  }
}

export default Signup;
