import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ShareIcon from '@mui/icons-material/Share';

export default function ShareSpeedDialAction(props) {
  const { preview } = props;
  const open = preview
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
