import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from '@mui/material';
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

const Resume = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleOpen2 = () => setOpen2(true);
    const handleOpen3 = () => setOpen3(true);
    const handleClose = () => setOpen(false);
    const handleClose2 = () => setOpen2(false);
    const handleClose3 = () => setOpen3(false);


    return (
        <>
            <section id="resume" className="resume">
                <div className="container">
                    <div className='section-title'>
                        <h2>Resume</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-10 d-flex">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Summary:</h3>
                            </div>
                            <div className="col-9 pt-2 sum">
                                <h6>Matt is a Frontend Developer with over 5 years of experience in the field. His technical skills include HTML5, CSS3, SASS(SCSS), Bootstrap-5, JavaScript ES6, React.js, Redux, Material UI, Linux, SQL, Git & GitHub, Python, APIs, RESTful APIs, Firebase, Django, Agile, and Jira. Matt has worked as a Frontend Developer at Tower Cambridge and has developed web pages leading to a 30% increase in user engagement and retention. He also worked as an ESL & ICT Teacher in Vietnam and taught approximately 2400 hours over 3 years.</h6>
                            </div>
                        </div>
                        <div className="col-lg-10 d-flex mt-5">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Education:</h3>
                            </div>
                            <div className="col-9 edu">
                                <div className="resume-item">
                                    <h5>Master's of Education</h5>
                                    <h6>University of Essex, UK - <em>August 2020 - September 2023</em></h6>
                                </div>
                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen3}>Full-Stack Bootcamp</h5>
                                    <h6>Clarusway LLC, (Remote-USA) - <em>January 2022 - October 2022</em></h6>
                                    <p><Link href='https://www.clarusway.com' target='_blank' >Go to bootcamp's website</Link></p>
                                    <Modal
                                        open={open3}
                                        onClose={handleClose3}
                                        aria-labelledby="clarusway"
                                        aria-describedby="cls"
                                        className='modal3'
                                    >
                                        <Box sx={style}>
                                            <Typography id="clarusway" variant="h6" component="h2">
                                                <CloseIcon className='closeButton' onClick={handleClose3} />
                                                <h3>Full-Stack Bootcamp</h3>
                                                <h6>Clarusway LLC, (Remote-USA) - <em>January 2020 - September 2021</em></h6>
                                            </Typography>
                                            <Typography id="cls" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Developed interactive and responsive frontend for e-commerce website using HTML5, CSS3, JavaScript ES6, React, Bootstrap-5, SASS(SCSS), and Material UI.</li>
                                                    <li>Designed a payment page using JS functions and DOM manipulation and added support for API requests using Async, Await, and Fetch.</li>
                                                    <li>Implemented state management with React States and Redux and built a Dashboard page integrated with a database.</li>
                                                    <li>Utilized React-router, Axios, and Semantic UI libraries for improved UI experience.</li>
                                                    <li>Wrote modular and reusable code, utilizing build tools, package managers, and version control (Git & Github).</li>
                                                    <li>Adhered to SCRUM & Agile methodologies, JIRA, and the Software Development Life Cycle (SDLC).</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                                <div className="resume-item">
                                    <h5>Bachelor of Applied Science, Linguistics,</h5>
                                    <h6>Mersin University, Turkey - <em>September 2005 - June 2009</em></h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-10 d-flex mt-5">
                            <div className="col-3">
                                <h3 className="resume-title text-end">Experience:</h3>
                            </div>
                            <div className="col-9 edu">
                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen2}>Front End Developer</h5>
                                    <h6>Tower Cambridge, (Remote-Vietnam) - <em>August 2017 - Present</em></h6><p><Link href='https://towercambridge.com' target='_blank' >Go to employer's website</Link></p>
                                    <Modal
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="tower"
                                        aria-describedby="twr"
                                    >
                                        <Box sx={style}>
                                            <Typography id="tower" variant="h6" component="h2">
                                                <CloseIcon className='closeButton' onClick={handleClose2} />
                                                <h3>Front End Developer</h3>
                                                <h6>Tower Cambridge, (Remote-Vietnam) - <em>August 2017 - Present</em></h6>
                                            </Typography>
                                            <Typography id="twr" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Built and maintained the company's web application using modern web technologies, including React, React-Bootstrap, and React-Router-Dom.</li>
                                                    <li>Developed web pages for the company's web application, resulting in a 30% increase in user engagement and user retention.</li>
                                                    <li>Improved website load time by 35% by optimizing images and implementing lazy loading.</li>
                                                    <li>Integrated PayPal as a payment gateway, leading to a 25% increase in online transactions.</li>
                                                    <li>Integrated a third-party Learning Management System to enhance the functionality of the web app.</li>
                                                    <li>Implemented payment APIs to streamline the payment process for users.</li>
                                                    <li>Improved the overall design and functionality of the web app by transitioning from HTML to React and utilizing libraries such as AOS, React-Icons, and React-Sticky.</li>
                                                    <li>Used Vercel Analytics to track user behavior and optimize the user experience.</li>
                                                    <li>Utilized popular React libraries such as React-Toastify, React-YouTube, and React-Messenger-Chat-Plugin to add enhanced functionality to the web app.</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                                <div className="resume-item">
                                    <h5 className='shdw' onClick={handleOpen}>ESL & ICT Teacher</h5>
                                    <h6>Vinschool, (Hanoi-Vietnam) -  <em>August 2019 - January 2023</em></h6><p><Link href='https://vinschool.edu.vn' target='_blank' >Go to employer's website</Link></p>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="vinschool"
                                        aria-describedby="vsc"
                                    >
                                        <Box sx={style}>
                                            <Typography id="vinschool" variant="" component="">
                                                <CloseIcon className='closeButton' onClick={handleClose} />
                                                <h3>ESL & ICT Teacher</h3>
                                                <h6>Vinschool, (Hanoi-Vietnam) - <em>August 2019 - January 2023</em></h6>
                                            </Typography>
                                            <Typography id="vsc" sx={{ mt: 2 }}>
                                                <ul>
                                                    <li>Taught English as a second language to primary level students.</li>
                                                    <li>Developed and implemented IT courses for beginner to secondary level students, covering topics such as Digital Literacy, Microsoft Office Suite, Web Development, and Basic Programming (Python).</li>
                                                    <li>Designed and executed lesson plans that engaged students and encouraged critical thinking, creativity, and problem solving skills.</li>
                                                    <li>Conducted individual and group sessions, providing personalized feedback and support to help students reach their goals.</li>
                                                    <li>Utilized technology and multimedia resources to enhance student learning and create interactive and engaging lessons.</li>
                                                    <li>Provided personalized guidance and support to students, helping them to overcome language and IT-related challenges.</li>
                                                    <li>Implemented project-based learning methods to provide students with hands-on experience and real-world application of the materials taught.</li>
                                                    <li>Managed a class of 25-30 students, ensuring that each student received individualized attention and support.</li>
                                                    <li>Managed and maintained a positive and supportive learning environment, fostering a positive relationship with students and promoting their success.</li>
                                                    <li>Taught approximately 800 hours over a three-year period, reaching an average of 180 students per year.</li>
                                                    <li>Utilized EdTech platforms such as Google Classroom, Khan Academy, Codecademy, and Scratch to enhance student learning and promote engagement.</li>
                                                </ul>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume