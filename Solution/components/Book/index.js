import React from "react";
import "./style.css";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { info } = this.props;
    return (
      <div className="book-main">
        <img src={info.imageURL} height="55%" width="100%" />
        <div className="book-info">
          <div className="book-title">{info.title}</div>
          <div className="book-author">{info.author}</div>
        </div>
        <div className="book-buttons">
          <div className="book-book_info_button">تفاصيل الكتاب</div>
          <div className="book-reserve_button">إحجز الكتاب</div>
        </div>
      </div>
    );
  }
}

export default Book;
