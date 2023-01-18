import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import SingleDropTarget from '../SingleDropTarget.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { preview, live } = props;
  const canEdit = !live && !preview;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label={<span contentEditable={canEdit}>Item One</span>} {...a11yProps(0)} />
          <Tab label={<span contentEditable={canEdit}>Item Two</span>} {...a11yProps(1)} />
          <Tab label={<span contentEditable={canEdit}>Item Three</span>} {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {
          preview
            ? 'Item One'
            : <SingleDropTarget live={live} />
        }
      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          preview
            ? 'Item Three'
            : <SingleDropTarget live={live} />
        }
      </TabPanel>
      <TabPanel value={value} index={2}>
        {
          preview
            ? 'Item Three'
            : <SingleDropTarget live={live} />
        }
      </TabPanel>
    </Box>
  );
};
