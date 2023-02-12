import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import lmc from '../assets/img/lmc.png';
import yba from '../assets/img/yba.png';
import lms from '../assets/img/lms.png';
import cam from '../assets/img/cam.png';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        xs: 350,
        sm: 350,
        md: 600,
        lg: 600,
        xl: 600,
    },
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll'
};


const Portfolio = () => {

    var items = [
        {
            name: "Django LMS App",
            skills: "Django framework, SQLite database management, Django's built-in security features (such as password validation and security middleware), Crispy forms for building forms, Bootstrap for designing, Data management for displaying the total number of students, courses, students in each course, fees, teacher salaries, etc. in the dashboard.",
            description: "A learning management system built with the Django framework and SQLite database management. The app utilizes Django's built-in security features, such as password validation and security middleware, to ensure secure user data. The user interface is visually appealing, with a clean and modern design powered by Bootstrap and forms built with crispy forms. The dashboard provides a comprehensive overview of important metrics, such as the number of students, courses, and students in each course, making it a valuable resource for budget planning and financial management.",
            link: "https://github.com/mabgcm/tower_web_api.git",
            img: lms
        },
        {
            name: "React Blog App",
            skills: "React 6, Firestore 9, CRUD operations, Toastify, Bootstrap 5, Axios, React-Router-Dom,  React-Icons,  Sass",
            description: "A React 6-based blog app with CRUD operations and real-time data synchronization using Firestore. The app features a responsive design with Bootstrap 5, clear notifications with react-toastify, and enhanced typography with react-icons and SASS. The project uses Axios for HTTP requests and react-scripts for development.",
            link: "https://ybav1.vercel.app/",
            img: yba
        },
        {
            name: "Translated React Web App",
            skills: "React (18.2.0), React-Intl (6.2.5), Reactstrap (9.1.5), React-Bootstrap (2.6.0)",
            description: "A web app that allows users to translate words and phrases into different languages. The app is built with React and utilizes the APIs from Yandex Translate to perform the translations. The user interface is simple and intuitive, making it easy for users to translate text quickly and efficiently.",
            link: "https://lmcpanama.com",
            img: lmc
        },
        {
            name: "React Web App",
            skills: "React, React-Bootstrap, React-Router-Dom,Vercel Analytics, AOS, React Toastify, React-YouTube,React-Messenger-Chat-Plugin",
            description: "Tower Cambridge's web application was developed and maintained, utilizing modern web technologies. The development of web pages resulted in a significant increase in user engagement and retention, with website load time also being improved. The integration of PayPal as a payment gateway led to a boost in online transactions. The functionality of the web application was further enhanced through the integration of a third-party Learning Management System and the implementation of payment APIs. Vercel Analytics and popular React libraries were utilized to optimize user experience and improve the overall design and functionality of the web app. The successful execution of these tasks by the Frontend Developer demonstrates a strong understanding of the technology and an ability to drive positive outcomes for the company.",
            link: "https://anhngucambridge.com",
            img: cam
        }
    ]

    return (
        <div>
            <div className='section-title'>
                <h2 className='m-5'>Portfolio</h2>
            </div>
            <section className='portfolio'>
                <Carousel
                    NextIcon={<ArrowForwardIosIcon />}
                    PrevIcon={<ArrowBackIosNewIcon />}
                    duration={800}
                    interval={8000}
                >
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel >
            </section>

        </div>
    )
}

function Item(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Paper elevation={3} className='paper'>
            <div>
                <h2>{props.item.name}</h2>
                <h6 className='mb-4'><strong>Project URL: </strong><Link to='{props.item.link}'>{props.item.link}</Link></h6>
                <div className="port-img">
                    <img src={[props.item.img]} className='portfolio-img' alt="" />
                </div>
            </div>
            <div className='mt-4 text-center'>
                <button className='btn btn-success' onClick={handleOpen}>See Details</button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <CloseIcon className='closeButton' onClick={handleClose} />
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <h2 onClick={handleClose}>{props.item.name}</h2>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h6><strong>Key Skills Used: </strong>{props.item.skills}</h6>
                            <p><strong>Project Summary: </strong>{props.item.description}</p>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Paper>
    )
}

export default Portfolio