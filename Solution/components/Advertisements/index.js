import React from "react";
import "./style.css";

class Advertisements extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "الاعلانات" };
  }
  render() {
    return (
      <div className="advertisements-main">
        <div className="advertisements-title">
          {!this.props.userInfo && (
            <div className="advertisements-main_title">الاعلانات</div>
          )}
          {this.props.userInfo && (
            <div className="advertisements-main_title_logged_in">
              المركز الاعلامي
            </div>
          )}
        </div>
        {this.props.userInfo && (
          <div className="advertisements-sub_titles">
            <div
              className={`advertisements-sub_title advertisements-sub_title_margin${
                this.state.activeTab == "الاعلانات"
                  ? " advertisements-active"
                  : ""
              }`}
            >
              الاعلانات
            </div>
            <div
              className={`advertisements-sub_title${
                this.state.activeTab == "التغريدات"
                  ? " advertisements-active"
                  : ""
              }`}
            >
              التغريدات
            </div>
          </div>
        )}
        <div className="advertisements-carousel">
          <div className="advertisements-carousel_header">
            <div className="advertisements-carousel_main_title">
              عنوان الاعلان
            </div>
            <div className="advertisements-carousel_sub_title">
              تاريخ نشر الاعلان
            </div>
          </div>
          <div className="advertisements-carousel_footer">
            ملخص عن الاعلان ملخص عن الاعلان ملخص عن الاعلان ملخص عن الاعلان ملخص
            عن الاعلان ملخص عن الاعلان ملخص عن الاعلان ملخص عن الاعلان ملخص عن
            الاعلان ملخص عن الاعلان
          </div>
          <img src="../../images/mountain.jpg" height="100%" width="100%" />
        </div>
        <div className="advertisements-carousel_dots">
          <img src="../../images/dots.svg" height="75px" width="75px" />
        </div>
        <div className="advertisements-see_more_button">تصفح المزيد</div>
      </div>
    );
  }
}

export default Advertisements;
