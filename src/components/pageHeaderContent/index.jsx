import React from "react";
import "./styles.scss";

const PageHeaderContent = (props) => {
  // Destructure props to get headerText and icon
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};

export default PageHeaderContent;
