import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import './Card.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function CustomizedMenus(props) {
  const {
    handleClose,
    anchorEl,
    open
  } = props;

  return <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
    <MenuItem onClick={handleClose} disableRipple>
      <EditIcon />
      Edit
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <FileCopyIcon />
      Duplicate
    </MenuItem>
    <Divider sx={{ my: 0.5 }} />
    <MenuItem onClick={handleClose} disableRipple>
      <ArchiveIcon />
      Archive
    </MenuItem>
    <MenuItem onClick={handleClose} disableRipple>
      <MoreHorizIcon />
      More
    </MenuItem>
  </StyledMenu>;
};

export default function RecipeReviewCard(props) {
  const { live, preview } = props;
  const canEdit = !live && !preview;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [image, setImage] = React.useState('https://mui.com/static/images/cards/paella.jpg');
  const imageDragOver = ev => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'copy';
    ev.target.classList.add('image-drop-target-live');
  }
  const imageDragLeave = ev => {
    ev.target.classList.remove('image-drop-target-live');
  };
  const imageDrop = ev => {
    ev.preventDefault();
    ev.target.classList.remove('image-drop-target-live');
    if (ev.dataTransfer.files) {
      var file = ev.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = function () {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const imageDrag = live || preview
    ? {}
    : {
      onDragOver: imageDragOver,
      onDragLeave: imageDragLeave,
      onDrop: imageDrop,
    };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" contentEditable={canEdit}>
            R
          </Avatar>
        }
        action={
          <>
            <IconButton
              aria-label="settings"
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <CustomizedMenus handleClose={handleClose} anchorEl={anchorEl} open={open} />
          </>
        }
        title={<span contentEditable={canEdit}>Shrimp and Chorizo Paella</span>}
        subheader={<span contentEditable={canEdit}>September 14, 2016</span>}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        {...imageDrag}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" contentEditable={canEdit}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph contentEditable={canEdit}>
            Method:
            <br /><br />
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
            <br /><br />
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            <br /><br />
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
            <br /><br />
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
