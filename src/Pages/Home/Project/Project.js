import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Project = (props) => {
    const { name, DesOne, DesTwo, DesThree, imageURL } = props.project;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    height="250"
                    image={imageURL}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Button sx={{ backgroundColor: '#67E5EE' }}>Live Site</Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Project;