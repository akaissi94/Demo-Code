import React from "react";
import { connect } from "react-redux";
import "./style.css";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setUserInfo } from "../../store/actions/login";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      startDate: new Date(),
      degreeCount: [""],
      bookCategories: ["الفلسفة", "الكيمياء", "الفيزياء", "الديانات"],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  render() {
    let { step, startDate, degreeCount, bookCategories } = this.state;
    return (
      <div className="signup_form-main">
        <div className="signup_form-container">
          <div className="signup_form-container_inner">
            <div className="signup_form-header">
              <div className="signup_form-title">سجل</div>
              <div className="signup_form-step">
                {step == 1
                  ? "الخطوة ١: المعلومات الشخصية"
                  : step == 2
                  ? "الخطوة ٢: تفاصيل التعليم"
                  : "الخطوة ٣: تفضيلات الكتب ومعلومات تسجيل الدخول"}
              </div>
            </div>
            <form className={`${step != 1 ? " signup_form-hide_step" : ""}`}>
              <div className="signup_form-block-borderless">
                <div className="signup_form-sub_title">الاسم الأول</div>
                <input className="signup_form-input" />
                <div className="signup_form-sub_title">إسم العائلة</div>
                <input className="signup_form-input" />
                <div className="signup_form-sub_title">تاريخ الولادة</div>
                <div>
                  <DatePicker
                    className="signup_form-input"
                    selected={startDate}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="signup_form-sub_title">البريد الالكتروني</div>
                <input type="email" className="signup_form-input" />
                <div className="signup_form-sub_title">العنوان</div>
                <textarea className="signup_form-input signup_form-textarea" />
                <div className="signup_form-sub_title">رقم الهاتف</div>
                <input type="tel" className="signup_form-input" />
              </div>
              <div className="signup_form-actions">
                <input
                  type="submit"
                  value="التالي"
                  className="signup_form-next_button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                    this.setState({ step: 2 });
                  }}
                />
              </div>
            </form>
            <form className={`${step != 2 ? " signup_form-hide_step" : ""}`}>
              {degreeCount.map((index) => {
                return (
                  <div key={index} className="signup_form-block">
                    <div className="signup_form-sub_title">إسم الشهادة</div>
                    <input className="signup_form-input" />
                    <div className="signup_form-sub_title">إسم الجامعة</div>
                    <input className="signup_form-input" />
                    <div className="signup_form-sub_title">المعدل التراكمي</div>
                    <input type="number" className="signup_form-input" />
                    <div className="signup_form-sub_title">
                      نسخة عن شهادة الجامعة
                    </div>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      className="signup_form-input_file"
                    />
                  </div>
                );
              })}
              <div
                className="signup_form-add_another_degree"
                onClick={() => {
                  let newDegreeCount = degreeCount;
                  newDegreeCount.push("");
                  this.setState({
                    degreeCount: newDegreeCount,
                  });
                }}
              >
                <img
                  className="signup_form-add_icon"
                  src="../../images/add.svg"
                  height="17px"
                  width="17px"
                />
                إضافة شهادة أخرى
              </div>
              <div className="signup_form-actions">
                <div
                  className="signup_form-back_button"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    this.setState({ step: 1 });
                  }}
                >
                  الرجوع
                </div>
                <input
                  type="submit"
                  value="التالي"
                  className="signup_form-next_button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                    this.setState({ step: 3 });
                  }}
                />
              </div>
            </form>
            <form className={`${step != 3 ? " signup_form-hide_step" : ""}`}>
              <div className="signup_form-block-borderless">
                <div className="signup_form-sub_title">فئات الكتب</div>
                <div className="signup_form-checkboxes">
                  {bookCategories.map((category, index) => {
                    return (
                      <div key={index} className="signup_form-checkbox">
                        <input type="checkbox" id={category} name={category} />
                        <label htmlFor={category}>{category}</label>
                      </div>
                    );
                  })}
                </div>
                <div className="signup_form-sub_title">إسم المستخدم</div>
                <input className="signup_form-input" />
                <div className="signup_form-sub_title">كلمة المرور</div>
                <input type="password" className="signup_form-input" />
                <div className="signup_form-sub_title">تأكيد كلمة المرور</div>
                <input type="password" className="signup_form-input" />
              </div>
              <div className="signup_form-actions">
                <div
                  className="signup_form-back_button"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    this.setState({ step: 2 });
                  }}
                >
                  الرجوع
                </div>
                <input
                  type="submit"
                  value="تقديم"
                  className="signup_form-submit_button"
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.setUserInfo({
                      username: "Abdulrahman El Kaissi",
                    });
                    window.scrollTo(0, 0);
                    this.props.history.push("/");
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setUserInfo: (userInfo) => dispatch(setUserInfo(userInfo)),
});

export default connect(null, mapDispatchToProps)(withRouter(SignupForm));
