import React from "react";

const SliderItem = props => {
  const imgsrc = props.imgsrc;
  const heading = props.heading;
  let cName = "carousel-item ";

  if (props.first) cName += "active";

  const di = props.di;

  return (
    <div className={cName} data-interval={di}>
      <img src={imgsrc} className="d-block w-100" alt={heading} />
      <h5>{heading}</h5>
    </div>
  );
};

export default SliderItem;
