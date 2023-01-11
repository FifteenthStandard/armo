import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import MultiDropTarget from '../MultiDropTarget.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicStack(props) {
  const { live, preview } = props;
  return (
    <Box sx={{ width: '100%', height: '100%', my: 2 }}>
      <Stack spacing={2}>
        {
          preview
            ? <>
              <Item>Item 1</Item>
              <Item>Item 2</Item>
              <Item>Item 3</Item>
            </>
            : <MultiDropTarget live={live} />
        }
      </Stack>
    </Box>
  );
};
