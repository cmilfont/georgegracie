import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import './home.css';

const useStyles = makeStyles(theme => ({
  root:{
    marginTop: '100px',
  },
  video: {
    minWidth: 800,
    [theme.breakpoints.down('sm')]: {
      minWidth: 330,
      maxWidth: 330,
      maxHeight: 300,
    },
  },
}));

export default withRouter(() => {
  
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography component="div" variant="body1" align="center">
        <div className="channel">
          <div className="calling">
            <span className="ola">Olá</span>, acompanhe e <a href="https://www.youtube.com/channel/UCArMDJUzbpLOmqryBPVAg5Q/videos"> siga o canal </a>
          </div>
          <div className="name">GEORGE GRACIE</div>
        </div>
        <div className="video-container" className={classes.video}>
          <iframe className={classes.video} width="853" height="480" src="https://www.youtube.com/embed/z4KvnFtZkoQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </Typography>
    </Container>
  )
});