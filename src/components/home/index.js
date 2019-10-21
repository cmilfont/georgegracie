import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import './home.css';

const useStyles = makeStyles(theme => ({
  root:{
    paddingTop: '20px',
  },
  videoContainer: {
    position: 'relative',
    paddingBottom: '56.25%',
    paddingTop: '30px', 
    height: 0, 
    overflow: 'hidden',
  },
  video: {
    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    maxWidth: 900,
    maxHeight: 600,
    //[theme.breakpoints.down('sm')]: {
      ///minWidth: 330,
      //maxWidth: 330,
      //maxHeight: 300,
    //},
  },
}));

export default withRouter(() => {
  
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography component="div" variant="body1" align="center">
        <div className="channel">
          <div className="calling">
            <span className="ola">Olá</span>, acompanhe e <a href="https://www.youtube.com/channel/UCArMDJUzbpLOmqryBPVAg5Q/videos">siga o canal</a>
          </div>
          <div className="name">GEORGE GRACIE</div>
        </div>
        <div className={classes.videoContainer}>
          <iframe 
            title="Canal George Gracie"
            className={classes.video}
            width="853"
            height="480"
            src="https://www.youtube.com/embed/z4KvnFtZkoQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
      </Typography>
    </Container>
  )
});