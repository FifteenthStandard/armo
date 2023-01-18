import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import SingleDropTarget from '../SingleDropTarget.js';

export default function SimplePaper(props) {
  const { live, preview } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: preview ? 128 : '100%',
          height: preview ? 128 : '100%',
        },
      }}
    >
      <Paper>
        {
          preview
            ? <Typography sx={{ padding: '1em', textAlign: 'center' }}>Content goes here</Typography>
            : <SingleDropTarget live={live} />
        }
      </Paper>
    </Box>
  );
}