import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const About = () => {
    return (
        <Container id="about">
            <Typography variant="h4" sx={{ mt: 10 }}>
                About Me
            </Typography>
            <Box sx={{ flexGrow: 1, my: 10 }}>
                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} spacing={2}>
                    <Grid item sx={{ display: 'flex', alignItems: 'center', }} xs={12} md={4}>
                        <Box sx={{ width: '300px', height: "300px", borderRadius: "50%" }}>
                            <img style={{ width: '100%', }} src="https://i.ibb.co/93z9ZC8/Zahid-B.jpg" alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box sx={{ disply: 'flex', alignItems: 'center', }}>
                            <Typography variant="h4" sx={{ textAlign: 'left' }}>
                                Front-end Develover
                            </Typography>
                            <Typography variant="h6" sx={{ textAlign: 'left', fontSize: '15px', color: "deepgray" }}>
                                I’m a Front-end Web Developer. I’m interested in obtaining <br /> a development position in a constructive atmosphere that <br /> focuses on web applications.I believe in hard work and efficiency.
                            </Typography>
                            <Box className="social_icons">
                                <a className="single_icon" target="_blank" rel="noreferrer" href="https://web.facebook.com/zahidux/">
                                    <FacebookOutlinedIcon className="icon" />
                                </a>
                                <a className="single_icon" target="_blank" rel="noreferrer" href="https://twitter.com/zahidux">
                                    <TwitterIcon className="icon" />
                                </a>
                                <a className="single_icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/zahidux/">
                                    <LinkedInIcon className="icon" />
                                </a>
                                <a className="single_icon" target="_blank" rel="noreferrer" href="https://github.com/zahidux">
                                    <GitHubIcon className="icon" />
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default About;