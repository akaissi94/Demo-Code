import React from "react";
import "./style.css";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { info } = this.props;
    return (
      <div className="category-main">
        <img
          className="category-image"
          src={info.imageURL}
          height="55%"
          width="100%"
        />
        <span className="category-title">{info.title}</span>
      </div>
    );
  }
}

export default Category;
