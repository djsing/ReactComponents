import React from "react";

const ImgFigure = props => {
  const modalId = props.modalId ? props.modalId : "";
  const toggle = props.modalId ? "modal" : "";
  const imgsrc = props.imgsrc;
  const caption = props.caption;
  const id = imgsrc
    .split("/")
    .pop()
    .split(".")
    .join("-");
  const handleClick = () => {
    if (modalId === "") return;

    let modalCaption = document.getElementById(`${modalId}-Title`);
    modalCaption.innerText = caption;

    let modalBody = document.getElementById(`${modalId}-modal-body`);
    modalBody.innerHTML = `<img className="figure-img img-fluid rounded" src="${imgsrc}" alt="Image Did Not Load. Please Check Your Connection." style="margin: auto;width: 100%;" />`;
  };
  return (
    <figure
      onClick={handleClick}
      id={id}
      className="figure"
      style={{ margin: "auto" }}
      data-toggle={`${toggle}`}
      data-target={`#${modalId}`}
    >
      <img
        className="figure-img img-fluid rounded"
        src={imgsrc}
        alt={caption}
        style={{ margin: "auto" }}
      />
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
};

export default ImgFigure;
