import { makeStyles } from '@mui/styles';

import colors from 'styles/colors';

export const useStyles = makeStyles({
  footer: {
    padding: '1rem',
    backgroundColor: colors.navColor,
    marginTop: 'auto',
    borderRadius: 0,
    boxShadow: 'none',
    borderTop: `3px solid ${colors.primary}`,
    position: 'relative',
    zIndex: 999,
  },
});
