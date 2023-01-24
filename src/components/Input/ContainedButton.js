import {
  Button,
} from '@mui/material';

import { editable } from '../../Armo.js';

export default function ContainedButton(props) {
  return (
    <Button variant="contained" {...editable(props)}>
      Contained
    </Button>
  );
};
