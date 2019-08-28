import React from "react";
import Header from "../components/Header";
import MainMenu from "../components/MainMenu";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MainMenu />
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

export default Login;
