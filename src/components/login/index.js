import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ButtonBase from '@material-ui/core/ButtonBase';
import actions from '../../api/actions';
import useStyles from './styles';

const Login = ({ classes, login }) => (
  <div className={classes.root}>
    <div className={classes.slogan}>Receba atualizações sobre o material desse site</div>
    <div className={classes.google}>
      <ButtonBase focusRipple onClick={login}>
        <img alt="Google Sign-in" src="images/btn_google_signin_dark_pressed_web.png" />
      </ButtonBase>
    </div>
  </div>
);

const Container = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const action = { type: actions.LOGIN_USER };
  const login = () => dispatch(action);
  return (
    <Login classes={classes} login={login} />
  );
}

export default withRouter(Container);