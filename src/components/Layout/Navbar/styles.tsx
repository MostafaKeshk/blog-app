import { makeStyles } from '@mui/styles';

import colors from 'styles/colors';

export const useStyles = makeStyles({
  header: {
    backgroundColor: colors.navColor,
    boxShadow: 'none',
    borderBottom: `3px solid ${colors.primary}`,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  menuButton: {
    marginRight: 'auto',
    padding: 0,
  },

  list: {
    width: 250,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  bottom: {
    marginTop: 'auto',
  },

  iconFont: {
    fontSize: '2rem',
  },
});
