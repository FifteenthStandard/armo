import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard(props) {
  const { live, preview } = props;
  const canEdit = !live && !preview;

  const [image, setImage] = React.useState('https://mui.com/static/images/cards/contemplative-reptile.jpg');
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
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          {...imageDrag}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" contentEditable={canEdit}>
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" contentEditable={canEdit}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
