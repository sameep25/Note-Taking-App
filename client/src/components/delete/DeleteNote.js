import * as React from "react";
import { useContext } from "react";

// mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// icons
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const DeleteNote = ({ note }) => {
  const { setNotes, deletedNotes, setDeletedNotes } = useContext(DataContext);

  const restoreNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNotes);

    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = deletedNotes.filter((data) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <RestoreFromTrashOutlinedIcon
          onClick={() => deleteNote(note)}
          fontSize="small"
          style={{ marginLeft: "auto" }}
        />
        <ArchiveOutlinedIcon
          onClick={() => restoreNote(note)}
          fontSize="small"
        />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
