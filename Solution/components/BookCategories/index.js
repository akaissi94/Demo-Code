import React from "react";
import Category from "../Category";
import "./style.css";

class BookCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: "وصل حديثاً" };
  }
  render() {
    let categoriesInfo = [
      {
        id: "1",
        title: "الفلسفة",
        imageURL: "../../images/question.svg"
      },
      {
        id: "2",
        title: "الكيمياء",
        imageURL: "../../images/medicine-flask.svg"
      },
      {
        id: "3",
        title: "الفيزياء",
        imageURL: "../../images/atom.svg"
      },
      {
        id: "4",
        title: "الديانات",
        imageURL: "../../images/atom.svg"
      },
      {
        id: "5",
        title: "الفيزياء",
        imageURL: "../../images/atom.svg"
      },
      {
        id: "6",
        title: "الفيزياء",
        imageURL: "../../images/atom.svg"
      }
    ];
    return (
      <div className="book_categories-main">
        <div className="book_categories-title">
          <div className="book_categories-main_title">فئات الكتب</div>
        </div>
        <div className="book_categories-categories">
          {categoriesInfo.map(entry => {
            return <Category key={entry.id} info={entry} />;
          })}
        </div>
        <div className="book_categories-see_more_button">تصفح المزيد</div>
      </div>
    );
  }
}

export default BookCategories;
