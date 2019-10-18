import { makeStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export default makeStyles(() => ({
  root: {
    color: blueGrey[500],
    position: 'relative',
    height: '100%',
    width: '100%',
    fontSize: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  slogan: {
    textAlign: 'center',
  },
  google: {
    textAlign: 'center',
  },
}));