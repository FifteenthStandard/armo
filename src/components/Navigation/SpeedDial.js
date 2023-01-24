import React, {
  useState,
} from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

import CopySpeedDialAction from './CopySpeedDialAction.js';
import PrintSpeedDialAction from './PrintSpeedDialAction.js';
import SaveSpeedDialAction from './SaveSpeedDialAction.js';
import ShareSpeedDialAction from './ShareSpeedDialAction.js';

import items from '../Items.js';

import { dropTarget } from '../../Armo.js';

const actions = [
  <CopySpeedDialAction />,
  <PrintSpeedDialAction />,
  <SaveSpeedDialAction />,
  <ShareSpeedDialAction />,
];

export default function BasicSpeedDial(props) {
  const { live, picker } = props;
  const style = picker
    ? {}
    : { position: 'absolute', bottom: 16, right: 16 };
  const [elems, setElems] = useState([]);
  const onDrop = ev => {
    const data = ev.dataTransfer.getData('text/plain');
    setElems(elems => [...elems, data]);
  };
  return (
      <SpeedDial
        {...dropTarget(props, onDrop, '')}
        ariaLabel="SpeedDial basic example"
        sx={style}
        icon={<SpeedDialIcon />}
      >
        {
          picker
            ? actions
            : elems.map(elem => items[elem]({ live }))
        }
      </SpeedDial>
  );
}