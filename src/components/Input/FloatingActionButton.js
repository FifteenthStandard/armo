import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FloatingActionButton(props) {
  const { picker } = props;
  const style = picker
    ? {}
    : { position: 'fixed', right: 20, bottom: 20, zIndex: 1000 };
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={style}
    >
      <AddIcon />
    </Fab>
  );
}