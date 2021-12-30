import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Project from '../Project/Project';
import { typography } from '@mui/system';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('./portfolio.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <Box id="projects" sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" sx={{ color: '#61dafb', fontWeight: '600', marginBottom: '35px' }}>
                    My Projects
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        projects.map(project => <Project
                            key={project.name}
                            project={project}
                        ></Project>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;