import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
const EditNote = ({ title, content, setFetchAgain, id }) => {
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
      const res = await axios.put(`http://localhost:3000/notes/${id}`, data);
      setFetchAgain(true);
    } catch (err) {
      console.error(err);
    }

    // Updatem Notes data
    // var updateNotesFields = docRef.update(data).then(() => {
    //     document.getElementsByClassName("modal-backdrop")[0].click();
    //     document.getElementsByClassName("modal-backdrop")[0].remove();
    //     handleEdit();
    // });
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
                <button type="submit" name="submit" className="addButton">
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
