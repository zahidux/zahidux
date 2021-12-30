import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Bannar = () => {
    return (
        <Container >
            <Box className="pry-bg" sx={{ flexGrow: 1, py: 12, my: 10 }}>
                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ disply: 'flex', alignItems: 'center', ml: 15 }}>
                            <Typography variant="h4" sx={{ textAlign: 'left', color: '#61dafb' }}>
                                Hello!
                            </Typography>
                            <Typography variant="h3" sx={{ textAlign: 'left', color: '#61dafb' }}>
                                I'm Zahid Hasan
                            </Typography>
                            <Typography variant="h5" sx={{ textAlign: 'left', color: '#61dafb' }}>
                                Web Developer
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: '300px', height: "300px", borderRadius: "50%" }}>
                            <img style={{ width: '100%', borderRadius: "50%" }} src="https://i.ibb.co/hC0Dh3F/DSC-0015-jpgw-1.jpg" alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Bannar;