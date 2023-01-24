import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { dropTarget, editable } from '../../Armo.js';

export default function ActionAreaCard(props) {
  const { picker } = props;

  const [image, setImage] = React.useState('https://mui.com/static/images/cards/contemplative-reptile.jpg');
  const imageDrop = ev => {
    if (ev.dataTransfer.files) {
      var file = ev.dataTransfer.files[0];
      var reader = new FileReader();
      reader.onload = function () {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [url, setUrl] = React.useState(null);
  const urlDrop = ev => {
    setUrl(ev.dataTransfer.getData('text/plain'));
  };

  return (
    <Card sx={picker && { maxWidth: 345 }}>
      <CardActionArea component={Link} href={url} {...dropTarget(props, urlDrop, '')}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          {...dropTarget(props, imageDrop, 'image-drop-target-live')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" {...editable(props)}>
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" {...editable(props)}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
