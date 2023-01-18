import ContainedButton from './Input/ContainedButton.js';
import FloatingActionButton from './Input/FloatingActionButton.js';
import BigSmallColumns from './Layout/BigSmallColumns.js';
import ThreeSmallColumns from './Layout/ThreeSmallColumns.js';
import MdBox from './Layout/MdBox.js';
import Stack from './Layout/Stack.js';
import Accordion from './Surfaces/Accordion.js';
import AppBar from './Surfaces/AppBar.js';
import ComplexCard from './Surfaces/ComplexCard.js';
import MediaCard from './Surfaces/MediaCard.js';
import Paper from './Surfaces/Paper.js';
import SpeedDial from './Navigation/SpeedDial';
import CopySpeedDialAction from './Navigation/CopySpeedDialAction';
import SaveSpeedDialAction from './Navigation/SaveSpeedDialAction';
import PrintSpeedDialAction from './Navigation/PrintSpeedDialAction';
import ShareSpeedDialAction from './Navigation/ShareSpeedDialAction';
import Tabs from './Navigation/Tabs';

const items = {
  '/Inputs/ContainedButton': (props) => <ContainedButton {...props} />,
  '/Inputs/Fab': (props) => <FloatingActionButton {...props} />,
  '/Layout/BigSmallColumns': (props) => <BigSmallColumns {...props} />,
  '/Layout/ThreeSmallColumns': (props) => <ThreeSmallColumns {...props} />,
  '/Layout/MdBox': (props) => <MdBox {...props} />,
  '/Layout/Stack': (props) => <Stack {...props} />,
  '/Surfaces/Accordion': (props) => <Accordion {...props} />,
  '/Surfaces/AppBar': (props) => <AppBar {...props} />,
  '/Surfaces/ComplexCard': (props) => <ComplexCard {...props} />,
  '/Surfaces/MediaCard': (props) => <MediaCard {...props} />,
  '/Surfaces/Paper': (props) => <Paper {...props} />,
  '/Navigation/SpeedDial': (props) => <SpeedDial {...props} />,
  '/Navigation/SpeedDial/Copy': (props) => <CopySpeedDialAction {...props} />,
  '/Navigation/SpeedDial/Print': (props) => <PrintSpeedDialAction {...props} />,
  '/Navigation/SpeedDial/Save': (props) => <SaveSpeedDialAction {...props} />,
  '/Navigation/SpeedDial/Share': (props) => <ShareSpeedDialAction {...props} />,
  '/Navigation/Tabs': (props) => <Tabs {...props} />,
};

export default items;
