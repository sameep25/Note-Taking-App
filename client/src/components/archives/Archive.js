import * as React from "react";
import { useContext } from "react";

// mui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

// icons
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

import { DataContext } from "../../context/DataProvider";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

const Archive = ({ note }) => {

  const { setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } = useContext(DataContext);

  const unArchiveNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setDeletedNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnarchiveOutlinedIcon
          onClick={() => unArchiveNote(note)}
          fontSize="small"
          style={{ marginLeft: "auto" }}
        />
        <DeleteOutlineOutlinedIcon
          onClick={() => deleteNote(note)}
          fontSize="small"
        />
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
