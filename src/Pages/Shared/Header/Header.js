import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, useMediaQuery, useTheme } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import ResponsiveDrawer from '../Drawer/Drawer';

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(matches)
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: '#282c34', boxShadow: 'var(--boxShadow) !important' }} position="static">
                    <Toolbar>
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'var(--PlayballFonts) !important', textAlign: 'left' }}>
                            Zahid Hasan
                        </Typography>

                        {matches ? <ResponsiveDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
                            : <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <HashLink className="link_style" to="/home#home" smooth>Home</HashLink>
                                <HashLink className="link_style" to="/home#about" smooth>About</HashLink>
                                <HashLink className="link_style" to="/home#projects" smooth>Projects</HashLink>
                                <HashLink className="link_style" to="/home#blog" smooth>Blog</HashLink>
                                <a target="_blank" rel="noreferrer" href="https://drive.google.com/u/0/uc?id=1tmiTT6qvCIkNdg8wxSuIz1EkXmiDi8Bt&export=download" className="btn_regular">Download Resume
                                </a>
                            </Box>}
                        {matches ? <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setOpenDrawer('true')}
                        >
                            <MenuIcon />
                        </IconButton>
                            : <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'none' }}>
                                Home
                            </Typography>}
                    </Toolbar>
                </AppBar>
            </Box>
        </Container >
    );
};

export default Header;