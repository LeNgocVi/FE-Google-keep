import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
const EditNote = ({ title, content, fetchData, id }) => {
  const closePopupRef = useRef();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      id: id,
      title: title,
      content: content,
    },
  });
  const onSubmit = async (data) => {
    try {
      console.log("edit");
      await axios.put(
        `https://6295b36a75c34f1f3b1f4546.mockapi.io/notes/${id}`,
        data
      );
      await fetchData().then(() => {
        document.getElementsByClassName("modal-backdrop")[0].click();
        document.getElementsByClassName("modal-backdrop")[0].remove();
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div
        ref={closePopupRef}
        className="modal fade"
        id={`exampleModal-${id}`}
        HTMLtabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <form
              className="editForm"
              id={`editNoteForm-${id}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group">
                <input
                  autoComplete="off"
                  placeholder="Take a note..."
                  className="form-control"
                  type="text"
                  name="title"
                  {...register("title")}
                />
              </div>
              <div className="form-group">
                <textarea
                  {...register("content")}
                  placeholder="Add Content Here...!"
                  className="form-control"
                  name="content"
                />
                <button
                  type="submit"
                  name="submit"
                  className="addButton"
                  data-mdb-dismiss="modal"
                >
                  <SaveIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
