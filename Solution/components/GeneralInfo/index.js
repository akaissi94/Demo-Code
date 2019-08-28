import React from "react";
import "./style.css";

class GeneralInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="general_info-main">
        <div className="general_info-info_boxes_container">
          <div className="general_info-info_box">
            <div className="general_info-info_box_title">توقيت المكتبة</div>
            <img src="../../images/time.svg" height="55px" width="55px" />
            <div className="general_info-info_box_sub_text">
              من الأحد إلى الخميس
            </div>
            <div className="general_info-info_box_sub_text">
              من ٧ صباحاً إلى ٢ مساءً
            </div>
          </div>
          <div className="general_info-info_box">
            <div className="general_info-info_box_title">راسلنا</div>
            <div className="general_info-info_box_sub_title">ارسل مقترحاتك</div>
            <textarea className="general_info-info_box_text_area" />
            <div className="general_info-send_button">أرسل</div>
          </div>
          <div className="general_info-info_box">
            <div className="general_info-info_box_title">روابط سريعة</div>
            <a href="" className="general_info-link">
              الرابط 1
            </a>
            <a href="" className="general_info-link">
              الرابط 2
            </a>
            <a href="" className="general_info-link">
              الرابط 3
            </a>
            <a href="" className="general_info-link">
              الرابط 4
            </a>
            <a href="" className="general_info-link">
              الرابط 5
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
