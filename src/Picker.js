import React, {
  useState,
} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import items from './components/Items.js';

import './Picker.css';

function draggable(id) {
  return {
    draggable: true,
    onDragStart: function (ev) {
      ev.dataTransfer.setData('text/plain', id);
      ev.dataTransfer.dropEffect = 'copy';
    }
  }
};

export default function Picker() {
  const [mode, setMode] = useState('edit');
  const handleChange = (_, mode) => {
    if (mode) setMode(mode);
    window.opener.postMessage({ live: mode === 'live'})
  };
  return <>
    <ToggleButtonGroup
      color="primary"
      value={mode}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="edit">Edit</ToggleButton>
      <ToggleButton value="live">Live</ToggleButton>
    </ToggleButtonGroup>
    <table width="100%">
      <tbody width="100%">
        {
          Object.keys(items)
            .map((key, ind) => {
              const item = items[key]({ preview: true });
              return <tr key={ind} {...draggable(key)}>
                <td>{key}</td>
                <td>{item}</td>
              </tr>;
            })
        }
      </tbody>
    </table>
  </>
};
