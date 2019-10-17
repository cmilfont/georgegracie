import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import nordTheme from './nord';

const theme = createMuiTheme({
  ...nordTheme,
  overrides: {
    MuiGridListTileBar: {
      title: {
        whiteSpace: 'normal',
        lineHeight: '16px',
      }
    },
  }
});

export default function Theme(props) {
    return (
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    );
  }