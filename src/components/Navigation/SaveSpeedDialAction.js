import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SaveIcon from '@mui/icons-material/Save';

export default function SaveSpeedDialAction(props) {
  const { picker } = props;
  const open = picker
    ? { open: true }
    : {};
  return (
    <SpeedDialAction
      {...props}
      {...open}
      key="Save"
      icon={<SaveIcon />}
      tooltipTitle="Save"
    />
  );
};
