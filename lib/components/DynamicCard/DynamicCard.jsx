import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function DynamicCard({ cardImage, cardHeader, cardSubText, cardLink }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardImage}
          title={cardHeader}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardHeader}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cardSubText}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={cardLink} target="_blank" rel="noopener" size="small" color="primary">
          Learn More
        </Link>
      </CardActions>
    </Card>
  );
}

DynamicCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardSubText:  PropTypes.string.isRequired,
  cardLink:  PropTypes.string.isRequired,
  cardHeader: PropTypes.string.isRequired,
};
