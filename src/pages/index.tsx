import { Container, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import type { NextPage } from 'next';

import colors from 'styles/colors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: colors.secondary,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1rem',
  },

  header: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },

  icon: {
    fontSize: '4.5rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '7.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '8rem',
    },
  },

  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    width: '4.5rem',
    height: '4.5rem',

    [theme.breakpoints.up('md')]: {
      width: '7.5rem',
      height: '7.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '8rem',
      height: '8rem',
    },
  },
  img: { maxWidth: '100%', height: 'auto' },
}));

const Home: NextPage = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <Container>
        <Typography className={styles.header} variant="h3" component="h1" gutterBottom>
          Home Page
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
