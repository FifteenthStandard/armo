import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';

export default function ShareSpeedDialAction(props) {
  const { picker } = props;
  const open = picker
    ? { open: true }
    : {};
  return (
    <SpeedDialAction
      {...props}
      {...open}
      key="Share"
      icon={<ShareIcon />}
      tooltipTitle="Share"
    />
  );
};
