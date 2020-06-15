import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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

export default function DynamicCard({ cardColor }) {
  const classes = useStyles();

  return (
    <Card style={{ backgroundColor: cardColor }} className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={'IMAGE_ROOT/react-logo.jpg'}
          title={'React Card'}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            React Card w/ Project Image
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This shows how an image that is normally stored under the public folder can be uploaded as part of the
            component upload and referenced properly using the rollup replace plugin
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

DynamicCard.propTypes = {
  cardColor: PropTypes.string,
};
DynamicCard.defaultProps = {
  cardColor: 'white',
};

