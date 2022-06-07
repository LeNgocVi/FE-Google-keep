import React, { useState, useEffect } from "react";
import "../styles/Variables.scss";
import Notes from "../components/Content/Notes";
// import EditNote from '../components/Content/EditNotes';
import CreateNoteForm from "../components/Content/CreateNoteForm";

import Header from "../components/header/Header";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArchiveIcon from "@material-ui/icons/Archive";
import EditIcon from "@material-ui/icons/Edit";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import axios from "axios";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [grid, setGrid] = useState("col-md-3");

  // mobile menu open state
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const handleRefresh = () => {
    setRefresh(true);
  };

  // add notes
  const handleSubmitFromApp = (data) => {
    console.log("Data from App", data);
    setNotes((prevData) => [...prevData, data]);
    setFetchAgain(!fetchAgain);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data: response } = await axios.get("http://localhost:3000/notes");
      setNotes(response);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    (fetchAgain || refresh) && fetchData().finally(() => setFetchAgain(false));
  }, [fetchAgain, refresh]);

  // delete note
  const handleDelete = async (id) => {
    // console.log(id)
    // DELETE request using axios with async/await
    const res = await axios.delete(`http://localhost:3000/notes/${id}`);
    // console.log("res ", res);
    if (res.status === 200) {
      setFetchAgain(!fetchAgain);
    }
    //setFetchAgain(true);
    await setNotes();
  };

  return (
    <>
      <Header
        handleClickMenuOpen={handleClickMenuOpen}
        handleRefresh={handleRefresh}
        setGrid={setGrid}
        grid={grid}
      />
      <div className={`sideBar text-white ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <span className="icon">
              <EmojiObjectsIcon />
            </span>
            <span className="linkText">Notes</span>
          </li>
          <li>
            <span className="icon">
              <NotificationsIcon />
            </span>
            <span className="linkText">Reminders</span>
          </li>
          <li>
            <span className="icon">
              <EditIcon />
            </span>
            <span className="linkText">Edit lables</span>
          </li>
          <li>
            <span className="icon">
              <ArchiveIcon />
            </span>
            <span className="linkText">Archives</span>
          </li>
          <li>
            <span className="icon">
              <DeleteOutlineIcon />
            </span>
            <span className="linkText">Trash</span>
          </li>
        </ul>
      </div>
      <div className={`mainContent ${menuOpen ? "open" : ""}`}>
        <CreateNoteForm handleSubmitFromApp={handleSubmitFromApp} />
        <div className="container">
          <div className="row">
            {isLoading ? (
              <h3 className="col-md-12 text-white text-center">
                <AutorenewIcon className="loader" />
              </h3>
            ) : (
              ""
            )}
            {!isLoading &&
              notes &&
              notes.map(({ title, content, id }) => (
                <Notes
                  key={id}
                  id={id}
                  title={title}
                  content={content}
                  //   fetchAxios={fetchData}
                  handleDelete={handleDelete}
                  fetchData={fetchData}
                  grid={grid}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
