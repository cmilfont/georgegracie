import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Link as RouterLink } from 'react-router-dom';

import Logged from './logged';

const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

const useStyles = makeStyles(theme => ({
  appBar: {
    color: '#4C566E',
    backgroundColor: '#fff',
  },
  button: {
    margin: theme.spacing(1),
  },
  separator: {
    flexGrow: 1,
  },
  link: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#3B4252',
    fontWeight: 'bold',
  },
  margin: {
    margin: theme.spacing(1),
  },
  breve: {
    fontSize: '7px',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const user = useSelector(state => state.user);

const menu = user.email ? 
  [
    <div className={classes.separator} />,
    <Logged user={user} />
  ]: 
    <Button color="primary" variant="contained" component={Link1} to="/login">Login</Button>;

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Link1 className={classes.link} to="/">
          <Avatar alt="George Gracie Logo" src="images/icons/icon-72x72.png" />
        </Link1>
        <Button size="small" className={classes.button} color="inherit" component={Link1} to="/lutador">Lutador</Button>
        <Button size="small" className={classes.button} color="inherit" component={Link1} disabled to="/mestre">
          <Badge
            badgeContent={
              <span className={classes.breve}>
                Breve
              </span>
            } 
            color="secondary" 
            className={classes.margin}
          >
            Mestre
          </Badge>
        </Button>
        {menu}
      </Toolbar>
    </AppBar>
  );
}