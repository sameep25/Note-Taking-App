import * as React from "react";
import { useState, useRef, useContext } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { ClickAwayListener } from "@mui/material";

import { v4 as uuid } from "uuid";

import { DataContext } from "../../context/DataProvider";

const Container1 = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 /30%), 0 2px 6px rgb(60 64 67 /15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 15px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  // context api
  const { setNotes } = useContext(DataContext);

  const containerRef = useRef();

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };

  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "15px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };

  const onTextChange = (e) => {
    let changeNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changeNote);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container1 ref={containerRef}>
        {showTextField && (
          <TextField
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            name="heading"
            onChange={(e) => onTextChange(e)}
            value={addNote.heading} //controled component
          />
        )}
        <TextField
          placeholder="Take a Note..."
          multiline
          maxRows={Infinity}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          style={{ marginBottom: 10 }}
          name="text"
          onChange={(e) => onTextChange(e)}
          value={addNote.text}
          onClick={onTextAreaClick}
        />
      </Container1>
    </ClickAwayListener>
  );
};

export default Form;
