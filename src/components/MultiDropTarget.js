import React, {
  useState,
} from 'react';

import items from './Items.js';

import './DropTarget.css';

export default function MultiDropTarget(props) {
  const { live } = props;
  const [elems, setElems] = useState([]);
  return <>
    {elems.map(elem => items[elem]({ live }))}
    {
      live
        ? <></>
        : <p
            key="drop-target"
            className="drop-target"
            onDragOver={ev => {
              ev.preventDefault();
              ev.dataTransfer.dropEffect = 'copy';
              ev.target.classList.add('drop-target-live');
            }}
            onDragLeave={ev => {
              ev.preventDefault();
              ev.target.classList.remove('drop-target-live');
            }}
            onDrop={ev => {
              ev.preventDefault();
              ev.target.classList.remove('drop-target-live');
              const data = ev.dataTransfer.getData('text/plain');
              setElems(elems => [...elems, data]);
            }}
          >
            Multi-drop-target
          </p>
    }
  </>;
};
