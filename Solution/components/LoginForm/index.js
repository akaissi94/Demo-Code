import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { withRouter } from "react-router-dom";
import { setUserInfo } from "../../store/actions/login";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login_form-main">
        <div className="login_form-container">
          <div className="login_form-container_upper">
            <div className="login_form-title">تسجيل الدخول</div>
            <div className="login_form-sub_title">إسم المستخدم</div>
            <input className="login_form-input" />
            <div className="login_form-sub_title">كلمة المرور</div>
            <input type="password" className="login_form-input" />
            <div className="login_form-actions">
              <div
                className="login_form-submit_button"
                onClick={() => {
                  this.props.setUserInfo({
                    username: "Abdulrahman El Kaissi",
                  });
                  this.props.history.push("/");
                  window.scrollTo(0, 0);
                }}
              >
                تسجيل الدخول
              </div>
              <a href="" className="login_form-link login_form-forgot_password">
                نسيت كلمة المرور؟
              </a>
            </div>
            <div className="login_form-alternative">أو سجل عبر</div>
            <img
              className="login_form-social_media"
              src="../../images/twitter.svg"
              height="50px"
              width="50px"
            />
            <img
              className="login_form-social_media"
              src="../../images/gmail.svg"
              height="50px"
              width="50px"
            />
            <img
              className="login_form-social_media"
              src="../../images/facebook.svg"
              height="50px"
              width="50px"
            />
          </div>
          <div className="login_form-footer">
            <span>ليس لديك حساب؟</span>
            <a
              href=""
              className="login_form-link login_form-sign_up"
              onClick={() => {
                this.props.history.push("/signup");
              }}
            >
              سجل الآن
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

export default connect(null, mapDispatchToProps)(withRouter(LoginForm));
