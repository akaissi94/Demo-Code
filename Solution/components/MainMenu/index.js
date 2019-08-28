import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "الرئيسية",
      isMenuOpen: false,
      isBookCategoriesOpen: false,
      isNewsCategoriesOpen: false,
      isBookCategoriesOpenCompacted: false,
      isNewsCategoriesOpenCompacted: false,
      expandedSearch: false
    };
  }
  toggleMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
      expandedSearch: false
    });
  }
  render() {
    let tabs = ["الفعاليات", "الأخبار", "فئات الكتب", "عن المكتبة", "الرئيسية"];
    let categories = ["الفلسفة", "التاريخ", "العلوم", "الديانات"];
    let newsCategories = ["أخبار محلية", "أخبار عالمية"];
    return (
      <div>
        {this.props.userInfo && (
          <div
            className="main_menu-sign_out"
            onClick={() => {
              localStorage.removeItem("userInfo");
              this.props.history.push("/");
            }}
          >
            <div className="main_menu-sign_out_content">
              <img
                className="main_menu-sign_out_icon"
                src="../../images/sign-out.svg"
                height="15px"
                width="15px"
              />
              <div className="main_menu-sign_out_text">
                اضغط هنا لتسجيل الخروج
              </div>
            </div>
          </div>
        )}
        <div className="main_menu-main">
          <img
            className={`main_menu-menu${
              this.props.userInfo ? " main_menu-menu_compact" : ""
            }`}
            src="../../images/menu.svg"
            height="35px"
            width="35px"
            onClick={() => this.toggleMenu()}
          />
          {!this.props.userInfo && (
            <div
              className="main_menu-sign_in_button"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              تسجيل الدخول
            </div>
          )}
          {this.props.userInfo && (
            <div>
              <div
                className="main_menu-user"
                onClick={() => {
                  this.props.history.push("/profile");
                }}
              >
                <img
                  className="main_menu-user_logo"
                  src="../../images/user.svg"
                  height="40px"
                  width="40px"
                />
                <div className="main_menu-user_name">عبدالرحمن</div>
              </div>
              <img
                className="main_menu-notification"
                src="../../images/notification.svg"
                height="35px"
                width="35px"
              />
              <img
                className="main_menu-message"
                src="../../images/message.svg"
                height="35px"
                width="35px"
              />
            </div>
          )}
          <img
            className={`main_menu-magnifier${
              this.props.userInfo ? " main_menu-magnifier_compact" : ""
            }`}
            src="../../images/magnifier.svg"
            height="35px"
            width="35px"
            onClick={() => {
              if (this.props.shouldSearchExpand) {
                this.setState({
                  expandedSearch: !this.state.expandedSearch,
                  isMenuOpen: false
                });
              }
            }}
          />
          <div className="main_menu-tabs">
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={`main_menu-tab${
                    this.state.activeTab == tab ? " active" : ""
                  }${this.props.userInfo ? " main_menu-tab_compact" : ""}`}
                  onClick={() => {
                    if (tab == "الرئيسية") {
                      this.props.history.push("/");
                    } else if (tab == "فئات الكتب") {
                      this.setState({
                        isBookCategoriesOpen: !this.state.isBookCategoriesOpen,
                        isNewsCategoriesOpen: false
                      });
                    } else if (tab == "الأخبار") {
                      this.setState({
                        isNewsCategoriesOpen: !this.state.isNewsCategoriesOpen,
                        isBookCategoriesOpen: false
                      });
                    }
                  }}
                >
                  {tab}
                  {tab == "فئات الكتب" && this.state.isBookCategoriesOpen && (
                    <div className="main_menu-categories_display">
                      {categories.map((categ, index) => {
                        return (
                          <div
                            key={index}
                            className="main_menu-categories_display_entry"
                          >
                            {categ}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {tab == "الأخبار" && this.state.isNewsCategoriesOpen && (
                    <div className="main_menu-categories_display">
                      {newsCategories.map((categ, index) => {
                        return (
                          <div
                            key={index}
                            className="main_menu-categories_display_entry"
                          >
                            {categ}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <img
            className="main_menu-globe_book"
            src="../../images/encyclopedia.svg"
            height="50px"
            width="50px"
            onClick={() => {
              this.props.history.push("/");
            }}
          />
          <div className="main_menu-title">
            <div className="main_menu-main_text">المكتبة الالكترونية</div>
            <div className="main_menu-sub_text">وزارة التعليم العالي</div>
          </div>
        </div>
        {this.state.isMenuOpen && (
          <div className="main_menu-menu_display">
            {tabs.reverse().map((tab, index) => {
              return (
                <div key={index}>
                  <div
                    className={`main_menu-menu_drop_tab${
                      this.state.activeTab == tab ? " menu_drop_active" : ""
                    }`}
                    onClick={() => {
                      if (tab == "الرئيسية") {
                        this.props.history.push("/");
                      } else if (tab == "فئات الكتب") {
                        this.setState({
                          isBookCategoriesOpenCompacted: !this.state
                            .isBookCategoriesOpenCompacted
                        });
                      } else if (tab == "الأخبار") {
                        this.setState({
                          isNewsCategoriesOpenCompacted: !this.state
                            .isNewsCategoriesOpenCompacted
                        });
                      }
                    }}
                  >
                    {tab}
                  </div>
                  {tab == "فئات الكتب" &&
                    this.state.isBookCategoriesOpenCompacted &&
                    categories.map((categ, index) => {
                      return (
                        <div
                          className="main_menu-menu_drop_tab main_menu-menu_drop_sub_tab"
                          key={index}
                        >
                          {categ}
                        </div>
                      );
                    })}
                  {tab == "الأخبار" &&
                    this.state.isNewsCategoriesOpenCompacted &&
                    newsCategories.map((categ, index) => {
                      return (
                        <div
                          className="main_menu-menu_drop_tab main_menu-menu_drop_sub_tab"
                          key={index}
                        >
                          {categ}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        )}
        {this.state.expandedSearch && (
          <div className="main_menu-expanded_search_display">
            <div className="main_menu-expanded_search_display_inner">
              <input
                className="main_menu-expanded_search_input"
                placeholder="بحث"
              />
              <img
                className="main_menu-expanded_search_icon"
                src="../../images/search.svg"
                height="25px"
                width="25px"
              />
              <div className="main_menu-expanded_search_advanced_options">
                <div className="main_menu-expanded_search_advanced_option">
                  <div className="main_menu-filter_name">خيار متقدم:</div>
                  <div className="main_menu-filter_value">
                    <span className="main_menu-filter_value_text">القيمة</span>
                    <img
                      src="../../images/down-arrow-grey.svg"
                      height="15px"
                      width="15px"
                    />
                  </div>
                </div>
                <div className="main_menu-expanded_search_advanced_option">
                  <div className="main_menu-filter_name">خيار متقدم:</div>
                  <div className="main_menu-filter_value">
                    <span className="main_menu-filter_value_text">القيمة</span>
                    <img
                      src="../../images/down-arrow-grey.svg"
                      height="15px"
                      width="15px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(MainMenu);
