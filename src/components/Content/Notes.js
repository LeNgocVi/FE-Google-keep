import React, { useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import EditNote from "./EditNotes";

export default function Notes({
  title,
  content,
  id,
  handleDelete,
  grid,
  setFetchAgain,
}) {
  const handleDeleteNotes = () => {
    handleDelete(`${id}`);
  };

  return (
    <>
      <div className={grid}>
        <div className="noteWrapper">
          <h3>{title}</h3>
          <p>{content}</p>
          <div className="actionButtons">
            <button type="button" className="btn btn-warning">
              <DeleteForeverIcon onClick={handleDeleteNotes} />
            </button>
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target={`#exampleModal-${id}`}
            >
              <EditIcon />
            </button>
          </div>
          <EditNote
            title={title}
            content={content}
            setFetchAgain={setFetchAgain}
            id={id}
          />
        </div>
      </div>
    </>
  );
}
