import React from "react";
import ReservedBook from "../ReservedBook";
import "./style.css";

class ProfileMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "حجوزاتي" };
  }
  // componentDidMount() {
  //   document.getElementById("body").style.minWidth = "740px";
  // }
  // componentWillUnmount() {
  //   document.getElementById("body").style.minWidth = "615px";
  // }
  render() {
    let reservedBooksInfo = [
      {
        id: "1",
        title: "عنوان الكتاب",
        author: "إسم الكاتب",
        publisher: "إسم الناشر",
        state: "محجوز",
        reservationDate: "20-OCT-2018",
        reservationEndDate: "28-OCT-2018",
        imageURL: "../../images/book8.jpg"
      },
      {
        id: "2",
        title: "عنوان الكتاب",
        author: "إسم الكاتب",
        publisher: "إسم الناشر",
        state: "محجوز",
        reservationDate: "10-OCT-2018",
        reservationEndDate: "10-NOV-2018",
        imageURL: "../../images/book9.jpg"
      },
      {
        id: "3",
        title: "عنوان الكتاب",
        author: "إسم الكاتب",
        publisher: "إسم الناشر",
        state: "محجوز",
        reservationDate: "01-OCT-2018",
        reservationEndDate: "01-NOV-2018",
        imageURL: "../../images/book10.jpg"
      },
      {
        id: "4",
        title: "عنوان الكتاب",
        author: "إسم الكاتب",
        publisher: "إسم الناشر",
        state: "حجز منتهي",
        reservationDate: "13-SEP-2018",
        reservationEndDate: "25-SEP-2018",
        imageURL: "../../images/book11.jpg"
      },
      {
        id: "5",
        title: "عنوان الكتاب",
        author: "إسم الكاتب",
        publisher: "إسم الناشر",
        state: "حجز غير ناجح",
        reservationDate: "02-AUG-2018",
        reservationEndDate: "18-AUG-2018",
        imageURL: "../../images/book12.jpg"
      }
    ];
    return (
      <div>
        <div className="profile_main-main">
          <div className="profile_main-user_logo_container">
            <img className="profile_main-user_logo" src="../../images/me.png" />
          </div>
          <div className="profile_main-user_full_name">عبدالرحمن القيسي</div>
          <div className="profile_main-date">25/02/2019</div>
          <div className="profile_main-edit_profile_button">تعديل الملف</div>
        </div>
        <div className="profile_main-sub_titles">
          <span
            className={`profile_main-sub_title profile_main-sub_title_margin${
              this.state.activeTab == "معلوماتي الشخصية"
                ? " profile_main-active"
                : ""
            }`}
          >
            معلوماتي الشخصية
          </span>
          <span
            className={`profile_main-sub_title profile_main-sub_title_margin${
              this.state.activeTab == "حجوزاتي" ? " profile_main-active" : ""
            }`}
          >
            حجوزاتي
          </span>
          <span
            className={`profile_main-sub_title${
              this.state.activeTab == "استعاراتي" ? " profile_main-active" : ""
            }`}
          >
            استعاراتي
          </span>
        </div>
        <div className="profile_main-my_reservations">
          <div className="profile_main-my_reservations_navigation">
            <div className="profile_main-filter_name">التصنيف:</div>
            <div className="profile_main-filter_value">
              <span className="profile_main-filter_value_text">
                جميع الحجوزات
              </span>
              <img
                src="../../images/down-arrow-grey.svg"
                height="15px"
                width="15px"
              />
            </div>
            <div className="profile_main-search">
              <input className="profile_main-search_input" placeholder="بحث" />
              <img
                className="profile_main-search_icon"
                src="../../images/search.svg"
                height="25px"
                width="25px"
              />
            </div>
          </div>
          <div className="profile_main-book_reservation_results">
            {reservedBooksInfo.map((book, index) => {
              return <ReservedBook key={index} info={book} />;
            })}
          </div>
          <div className="profile_main-see_more_button">عرض المزيد</div>
        </div>
      </div>
    );
  }
}

export default ProfileMain;
