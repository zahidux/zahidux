import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2d2epgl', 'template_ugxuwte', form.current, 'user_hdeAIgcxQdIEhJ1mg4ASK')
            .then((result) => {
                console.log(result.text);
                alert('Email Send Successfully!')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Container>
            <Box className="pry-bg" id="contact" sx={{ pb: 5, my: 10 }}>
                <Box sx={{ textAlign: 'center', padding: "80px" }}>
                    <Typography className="section_title" variant="h3">
                        Contact Me
                    </Typography>
                </Box>
                <Box className="contact_form_box">
                    <Box className="contact_text">
                        <Typography sx={{ color: '#fff', textAlign: 'center', }} variant="h3">
                            Get In Touch
                        </Typography>
                    </Box>
                    <form ref={form} onSubmit={sendEmail}>
                        <TextField
                            required
                            label="Your Name"
                            variant="outlined"
                            type="text"
                            name="name"
                        />
                        <TextField
                            required
                            label="Email"
                            variant="outlined"
                            type="email"
                            name="email"
                        />
                        <TextField
                            required
                            label="Subject"
                            variant="outlined"
                            type="text"
                            name="subject"
                        />
                        <TextField
                            required
                            label="Message"
                            multiline
                            rows={4}
                            variant="outlined"
                            name="message"
                        />
                        <Box sx={{ Disply: "flex", alignItems: "center", justifyContent: "Center" }}>
                            <Button sx={{ padding: '15px 0 !important', backgroundColor: "yellow", width: "100px" }} className="btn_regular" type="submit">Submit</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};

export default Contact;