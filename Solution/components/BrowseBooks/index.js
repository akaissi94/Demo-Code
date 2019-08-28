import React from "react";
import Book from "../Book";
import "./style.css";

class BrowseBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "وصل حديثاً" };
  }
  render() {
    let bookInfo = !this.props.userInfo
      ? [
          {
            id: "1",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book1.jpg"
          },
          {
            id: "2",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book2.jpg"
          },
          {
            id: "3",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book3.jpg"
          },
          {
            id: "4",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book4.jpg"
          }
        ]
      : [
          {
            id: "7",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book7.jpg"
          },
          {
            id: "6",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book6.jpg"
          },
          {
            id: "3",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book3.jpg"
          },
          {
            id: "5",
            title: "عنوان الكتاب",
            author: "المؤلف",
            imageURL: "../../images/book5.jpg"
          }
        ];
    return (
      <div className="browse_books-main">
        <div className="browse_books-title">
          <div className="browse_books-main_title">تصفح الكتب</div>
        </div>
        <div className="browse_books-sub_titles">
          <span
            className={`browse_books-sub_title browse_books-sub_title_margin${
              this.state.activeTab == "وصل حديثاً" ? " browse_books-active" : ""
            }${this.props.userInfo ? " browse_books-sub_title_compact" : ""}`}
          >
            وصل حديثاً
          </span>
          <span
            className={`browse_books-sub_title${
              this.state.activeTab == "الأكثر تقييماً"
                ? " browse_books-active"
                : ""
            }${this.props.userInfo ? " browse_books-sub_title_compact" : ""}`}
          >
            الأكثر تقييماً
          </span>
          {this.props.userInfo && (
            <span
              className={`browse_books-sub_title${
                this.state.activeTab == "اخترنا لكم"
                  ? " browse_books-active"
                  : ""
              }`}
            >
              اخترنا لكم
            </span>
          )}
        </div>
        <div className="browse_books-books">
          {bookInfo.map(entry => {
            return <Book key={entry.id} info={entry} />;
          })}
        </div>
        <div className="browse_books-see_more_button">تصفح المزيد</div>
      </div>
    );
  }
}

export default BrowseBooks;
