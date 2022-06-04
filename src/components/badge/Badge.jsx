import React from "react";
import './badge.css'
const Badge = (props) => {
  return (
    <div>
      <span className={`badge badge-${props.type}`}>{props.content}</span>
    </div>
  );
};

export default Badge;
