import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { singleDroppable } from '../../Armo.js';

export default function SimplePaper(props) {
  const { picker } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: picker ? 128 : '100%',
          height: picker ? 128 : '100%',
        },
      }}
    >
      <Paper>
        {singleDroppable(props, <Typography sx={{ padding: '1em', textAlign: 'center' }}>Content goes here</Typography>)}
      </Paper>
    </Box>
  );
}