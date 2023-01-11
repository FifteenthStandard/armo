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

const actions = [
  <CopySpeedDialAction />,
  <PrintSpeedDialAction />,
  <SaveSpeedDialAction />,
  <ShareSpeedDialAction />,
];

export default function BasicSpeedDial(props) {
  const { live, preview } = props;
  const style = preview
    ? {}
    : { position: 'absolute', bottom: 16, right: 16 };
  const [elems, setElems] = useState([]);
  const dragTarget = preview || live
    ? {}
    : {
        onDragOver: ev => {
          ev.preventDefault();
          ev.dataTransfer.dropEffect = 'copy';
        },
        onDrop: ev => {
          ev.preventDefault();
          const data = ev.dataTransfer.getData('text/plain');
          setElems(elems => [...elems, data]);
        }
      }
  return (
      <SpeedDial
        {...dragTarget}
        ariaLabel="SpeedDial basic example"
        sx={style}
        icon={<SpeedDialIcon />}
      >
        {
          preview
            ? actions
            : elems.map(elem => items[elem]({ live }))
        }
      </SpeedDial>
  );
}