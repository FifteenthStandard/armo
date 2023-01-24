import React, {
  useEffect,
  useState,
} from 'react';

import SingleDropTarget from './components/SingleDropTarget';

export default function Home() {
  useEffect(() => {
    window.open('/armo/picker', 'picker', { popup: true });
  }, []);
  useEffect(() => {
    window.addEventListener('message', function (ev) {
      const { live } = ev.data;
      if (live !== undefined) setLive(live);
    });
  });
  const [live, setLive] = useState(false);
  return <SingleDropTarget live={live} />;
};
