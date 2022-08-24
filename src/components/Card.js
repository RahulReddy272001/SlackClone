import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function MediaCard({ imageLink, heading, text, belowText }) {
  return (
    <Card sx={{
      maxWidth: 285, height: "75%", borderRadius: "0", padding: "1em", width: "100%",
      minHeight: "420px",
      '&:hover': {
        transform: "scale(1.1) ", transition: "transform 0.15s ease-in-out"
      },
    }}>
      <CardMedia
        component="img"

        image={imageLink}
        alt="green iguana"
        sx={{ height: "40%" }}
      />
      <CardContent style={{ marginBottom: "33%" }}>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button size="small">{belowText}</Button>

        <Button size="small"><ArrowRightAltIcon /></Button>

      </CardActions>

    </Card>
  );
}
