import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import SingleDropTarget from '../SingleDropTarget';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function BoxSx(props) {
  const { live, preview } = props;
  return (
    <Box sx={{ width: '900px', margin: 'auto' }}>
      {
        preview
          ? <Item>Centered column limited to 900px wide</Item>
          : <SingleDropTarget live={live} />
      }
    </Box>
  );
};
