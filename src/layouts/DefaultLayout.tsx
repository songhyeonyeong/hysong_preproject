import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Copyright from '@/components/Copyright';
import AppBar from '@/components/AppBar';
import Drawer from '@/components/Drawer';

const mdTheme = createTheme();

function DefaultLayout(props: {children:any}) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar open={open} title="대시보드" toggleDrawer={toggleDrawer} />
        <Drawer open={open} toggleDrawer={toggleDrawer}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
            {props.children}
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Copyright sx={{ pt: 4 }} />
          </Container>  
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default DefaultLayout;