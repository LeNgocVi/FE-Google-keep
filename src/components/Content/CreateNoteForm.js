import React, { useState, useRef } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function CreateNoteForm({ handleSubmitFromApp }) {
  const [show, setShow] = useState(false);

  const formReset = useRef();
  // form hooks
  //   const [notes, setNotes] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data, e) => {
    // setNotes((prevData) => [...prevData, data]);

    //  insert data
    await axios
      .post("https://6295b36a75c34f1f3b1f4546.mockapi.io/notes", data)
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
    handleSubmitFromApp(data);
    e.target.reset();
    console.log(data);
    setShow(false);
  };

  // check the click target
  window.addEventListener("click", function (e) {
    if (document.getElementById("createNoteForm").contains(e.target)) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div className="container">
      <form
        ref={formReset}
        className="form"
        id="createNoteForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group">
          <input
            autoComplete="off"
            placeholder="Take a note..."
            className="form-control"
            type="text"
            name="title"
            onClick={() => setShow(true)}
            {...register("title", { required: "Please enter your title." })}
          />
        </div>
        <div className={!show ? "d-none" : "form-group"}>
          <textarea
            {...register("content", { required: "Please enter your content." })}
            placeholder="Add Content Here...!"
            className="form-control"
            name="content"
          />
          <button type="submit" name="submit" className="addButton">
            <AddIcon />
          </button>
        </div>
      </form>
    </div>
  );
}
