import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';

export default function PrintSpeedDialAction(props) {
  const { picker } = props;
  const open = picker
    ? { open: true }
    : {};
  return (
    <SpeedDialAction
      {...props}
      {...open}
      key="Print"
      icon={<PrintIcon />}
      tooltipTitle="Print"
    />
  );
};
