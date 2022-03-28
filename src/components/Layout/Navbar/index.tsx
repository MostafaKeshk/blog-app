import React from 'react';

import {
  Login as LoginIcon,
  AccountCircle as AccountCircleIcon,
  List as ListIcon,
  Dining as DiningIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useUser } from 'context/userContext';
import { Routes } from 'routes/Routes';
import colors from 'styles/colors';
import FirebaseUtils from 'utils/FirebaseUtils';

import logoImage from '../../../../public/images/logo.png';
import { useStyles } from './styles';

const Navbar: React.FC = () => {
  const styles = useStyles();
  const router = useRouter();
  const { user } = useUser();

  const anchor = 'right';
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchorToggle: string, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchorToggle]: open });
    };

  const list = (anchorList: string) => (
    <Box
      className={styles.list}
      onClick={toggleDrawer(anchorList, false)}
      onKeyDown={toggleDrawer(anchorList, false)}
    >
      <List>
        {!user && (
          <ListItem
            button
            style={{ borderBottom: `3px solid ${colors.primary}` }}
            onClick={() => router.push(Routes.loginLink)}
          >
            <ListItemIcon>
              <LoginIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary={'Login'} />
          </ListItem>
        )}

        {/* Account Link */}
        {!!user && (
          <ListItem button style={{ borderBottom: `3px solid ${colors.primary}` }}>
            <ListItemIcon>
              <AccountCircleIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText
              primary={<Chip style={{ cursor: 'pointer' }} label={user.phoneNumber} />}
            />
          </ListItem>
        )}

        {/* Public Routes */}

        <ListItem button onClick={() => router.push(Routes.homeLink)}>
          <ListItemIcon>
            <DiningIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </List>

      {/* Protected Routes */}
      {!!user && (
        <>
          <ListItem button onClick={() => router.push(Routes.profileLink)}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </>
      )}

      <List className={styles.bottom}>
        {!!user && (
          <ListItem>
            <Button onClick={FirebaseUtils.logOut} variant="contained" color="secondary" fullWidth>
              Log out
            </Button>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar className={styles.header} position="static">
        <Toolbar style={{ flexWrap: 'wrap' }}>
          <IconButton
            onClick={() => {
              router.push(Routes.homeLink);
            }}
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
            size="large"
          >
            <Box sx={{ mt: '8px', ml: 2.5 }}>
              <Image placeholder="blur" width="128" height="50" alt="logo" src={logoImage} />
            </Box>
          </IconButton>

          <IconButton
            onClick={toggleDrawer(anchor, true)}
            size="large"
            color="primary"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
        {list(anchor)}
      </Drawer>
    </>
  );
};

export default Navbar;
