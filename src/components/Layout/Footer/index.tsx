import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.footer} component="footer">
      <Typography component="h1" variant="h5">
        footer
      </Typography>
    </Box>
  );
};

export default Footer;
