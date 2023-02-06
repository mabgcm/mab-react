import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const notify = () =>
        toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h8b9y09', 'template_lmphi3c2', form.current, 'XUWBIUrOxP9PFb04C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };

    return (
        <section className='m-5 pt-5 text-center'>
            <h1 className=''>Contact Form</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '70vw' },
                }}
                noValidate
                autoComplete="off"
                ref={form} onSubmit={sendEmail}
            >
                <div>
                    <TextField
                        required
                        id="user_name"
                        name="from_name"
                        label="Your Name"
                        placeholder="Enter your name here.."
                    />
                    <TextField
                        required
                        id="email"
                        name="user_email"
                        label="Your E-mail"
                        type="email"
                        placeholder="Enter your email here.."
                    />
                    <TextField
                        id="message"
                        name="message"
                        label="Your Message"
                        multiline
                        rows={4}
                        placeholder="Default Value"
                    />
                </div>
                <button id='signin' onClick={notify} variant="success" type="submit" className='btn btn-success w-25'>Send</button>
                <ToastContainer />
            </Box>
        </section>
    )
}

export default Contact