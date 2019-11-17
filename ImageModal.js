import React from "react";

const ImageModal = props => {
  const id = props.modalId;
  const modalCaptionId = `${id}-Title`;
  const modalBodyId = `${id}-modal-body`;

  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{ width: "100%" }}>
            <h5
              className="modal-title"
              id={modalCaptionId}
              style={{ margin: "auto" }}
            >
              &nbsp;
            </h5>
          </div>
          <div id={modalBodyId} className="modal-body"></div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
