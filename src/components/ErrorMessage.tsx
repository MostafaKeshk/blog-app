import { Box, Typography, Paper, Theme } from '@mui/material/';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: 16,
    [theme.breakpoints.down('md')]: {
      fontSize: 14,
    },
  },
}));

type IProps = { small?: boolean };

const ErrorMessage: React.FC<IProps> = ({ children, small }) => {
  const classes = useStyles();

  return (
    <Box boxShadow={1} marginTop={small ? 1 : 5} style={{ width: '100%' }}>
      <Paper style={{ padding: small ? 7 : 30, width: '100%' }}>
        <Typography className={classes.text} color="error" variant="h6" align="center">
          {children}
        </Typography>
      </Paper>
    </Box>
  );
};

export default ErrorMessage;
