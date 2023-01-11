import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';

export default function PrintSpeedDialAction(props) {
  const { preview } = props;
  const open = preview
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
