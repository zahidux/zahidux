import { Button, Drawer, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const ResponsiveDrawer = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Drawer anchor="right" open={openDrawer}>
            <List>
                <ListItem sx={{ display: 'flex', justifyContent: 'center' }} button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <CloseIcon sx={{ margin: 'auto', width: '50px', height: '50px', color: '#ff2e59' }} />
                    </ListItemIcon>
                </ListItem>
                <ListItem className="d_menu_item" button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link className="res_link" href="#home">Home</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem className="d_menu_item" button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link className="res_link" href="#about">About</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem className="d_menu_item" button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link className="res_link" href="#blog">Blog</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem className="d_menu_item" button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link className="res_link" href="#projects">Projects</Link>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
                <ListItem className="d_menu_item" button onClick={() => setOpenDrawer(false)}>
                    <ListItemIcon>
                        <ListItemText>
                            <Button className="btn_regular" variant="contained">Download Resume
                            </Button>
                        </ListItemText>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default ResponsiveDrawer;