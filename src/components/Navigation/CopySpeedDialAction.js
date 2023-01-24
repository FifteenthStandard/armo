import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';

export default function CopySpeedDialAction(props) {
  const { picker } = props;
  const open = picker
    ? { open: true }
    : {};
  return (
    <SpeedDialAction
      {...props}
      {...open}
      key={'Copy'}
      icon={<FileCopyIcon />}
      tooltipTitle={'Copy'}
    />
  );
};
