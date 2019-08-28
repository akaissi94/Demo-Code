import React from "react";
import "./style.css";

class SearchArea extends React.Component {
  render() {
    return (
      <div className="search_area-main">
        <div className="search_area-search_container">
          <div className="search_area-searchbar_full">
            <div className="search_area-searchbar_categories">
              {!this.props.userInfo && <span>كل الفئات</span>}
              {this.props.userInfo && <span>مكتبتي</span>}
              <img
                className="search_area-arrow"
                src="../../images/down-arrow.svg"
                height="15px"
                width="15px"
              />
            </div>
            <div className="search_area-searchbar_submit">
              <img
                className="search_magnifier"
                src="../../images/magnifier.svg"
                height="20px"
                width="20px"
              />
            </div>
            <input
              placeholder="عنوان الكتاب"
              className="search_area-searchbar"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchArea;
