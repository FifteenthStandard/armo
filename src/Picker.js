import React, {
  useState,
} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';

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
  const handleChangeMode = (_, mode) => {
    if (!mode) return;
    setMode(mode);
    window.opener.postMessage({ live: mode === 'live'})
  };
  const [primary, setPrimary] = useState('');
  const handleChangePrimary = ev => {
    const primary = ev.target.value;
    setPrimary(primary);
    if (primary.length === 7) {
      window.opener.postMessage({ primary });
    }
    if (primary.length === 0) {
      window.opener.postMessage({ primary: '#1976d2' });
    }
  }
  return <>
    <ToggleButtonGroup
      color="primary"
      value={mode}
      exclusive
      onChange={handleChangeMode}
    >
      <ToggleButton value="edit">Edit</ToggleButton>
      <ToggleButton value="live">Live</ToggleButton>
    </ToggleButtonGroup>
    <br />
    <TextField label="Primary" variant="standard" value={primary} onChange={handleChangePrimary} />
    <table width="100%" className="component-list">
      <tbody width="100%">
        {
          Object.keys(items)
            .map((key, ind) => {
              const item = items[key]({ picker: true });
              return <tr key={ind} {...draggable(key)}>
                <td>{item}</td>
              </tr>;
            })
        }
      </tbody>
    </table>
  </>
};
