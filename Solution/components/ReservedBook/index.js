import React from "react";
import "./style.css";

class ReservedBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { info } = this.props;
    return (
      <div className="reserved_book-main">
        <img
          className="reserved_book-image"
          src={info.imageURL}
          height="100%"
          width="15%"
        />
        <div className="reserved_book-general_info">
          <div className="reserved_book-title">{info.title}</div>
          <div className="reserved_book-sub_title">
            <span>{info.author}</span> -{" "}
            <span className="reserved_book-publisher">{info.publisher}</span>
          </div>
          <div className="reserved_book-state">
            <span>الحالة</span>
            {info.state == "محجوز" && (
              <span className="reserved_book-state_inner">
                <img
                  src="../../images/verified.svg"
                  height="25px"
                  width="25px"
                />
                <span className="reserved_book-state_inner_green">
                  {info.state}
                </span>
              </span>
            )}
            {info.state == "حجز منتهي" && (
              <span className="reserved_book-state_inner">
                <img src="../../images/danger.svg" height="25px" width="25px" />
                <span className="reserved_book-state_inner_orange">
                  {info.state}
                </span>
              </span>
            )}
            {info.state == "حجز غير ناجح" && (
              <span className="reserved_book-state_inner">
                <img src="../../images/delete.svg" height="25px" width="25px" />
                <span className="reserved_book-state_inner_red">
                  {info.state}
                </span>
              </span>
            )}
          </div>
        </div>
        <div className="reserved_book-left">
          <div className="reserved_book-left_col1">
            <div className="reserved_book-dates_name">تاريخ الحجز</div>
            <div className="reserved_book-dates_name">تاريخ إنتهاء الحجز</div>
            <div className="reserved_book-cancel_reservation_button">
              إلغاء الحجز
            </div>
          </div>
          <div className="reserved_book-left_col2">
            <div className="reserved_book-dates_value">
              {info.reservationDate}
            </div>
            <div className="reserved_book-dates_value">
              {info.reservationEndDate}
            </div>
            <div className="reserved_book-repeat_reservation_button">
              إعادة الحجز
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReservedBook;
