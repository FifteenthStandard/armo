import React, {
  useState,
} from 'react';

import items from './Items.js';

export default function SingleDropTarget(props) {
  const { live } = props;
  const [elem, setElem] = useState(null);
  return elem
    ? items[elem]({ live })
    : live
    ? <></>
    : <p
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
          const data = ev.dataTransfer.getData('text/plain');
          setElem(data);
        }}
      >
        Single-drop-target
      </p>;
};
