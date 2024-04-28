import Grid from '@mui/material/Grid';
import './App.css';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import aboutusimg from '/images/about-image.png';
import Teamdetail from './Team';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import home from '/images/home.jpeg';
import gpt from '/images/features/chatbot.png';
import afor from '/images/features/funds.png';
import porta from '/images/features/power-bank.png';
import touch from '/images/features/touch-screen.png';
import Carousel from 'react-bootstrap/Carousel';
import Support from './Support';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Modal1 from './Modal';
import { useState } from 'react';
import acievedetail from './Achieve';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from './Header';
import Footer from './Footer';


// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Home() {

    AOS.init();
    const settings = {
        dots: false,
        infinite: true,
        speed: 8000, // Adjust speed as needed
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 5, // Number of logos visible at a time
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <div>
         <Header />
            <section id="home">
                <div className='home1'>
                    <Grid container spacing={2}>
                        {/* First column */}
                        <Grid className='homedetail' item xs={12} sm={6} >
                            <p className='hometitle'>The Future is Here</p>
                            <p className='homedescription'>Cutting-edge manufacturer of economical and efficient smart home automation systems.</p>
                            <Button className='learnmore' variant="dark" href="#pricing">Shop Now</Button>
                        </Grid>
                        {/* Second column */}
                        <Grid item xs={12} sm={6}  >
                            <img src={home} width="500px" height="500px" />
                        </Grid>
                    </Grid>
                </div>
                <div data-aos="slide-up" data-aos-duration="3100" id='features'>
                    <center>
                        <p className="fetitle">Features</p>
                        <p className='fetdec'>Main Features of Speak Me</p>
                    </center>
                    <Grid className='fetdetail' container spacing={2}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">
                                        <img src={porta} width="50px" height="50px" />
                                        <p className='fettitle'>Portable</p>
                                        <p className='fedetail'>Light-weight with high battery backup</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">
                                        <img src={afor} width="50px" height="50px" />
                                        <p className='fettitle'>Affordable</p>
                                        <p className='fedetail'>Making existing home appliances smart</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">
                                        <img src={touch} width="50px" height="50px" />
                                        <p className='fettitle'>Touchscreen Display</p>
                                        <p className='fedetail'>To manually control your appliances</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1">
                                        <img src={gpt} width="50px" height="50px" />
                                        <p className='fettitle'>SkAI GPT</p>
                                        <p className='fedetail'>Control devices or interact with virtual assistant</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>

                </div>
            </section>
            <section data-aos="slide-up" data-aos-duration="3100" id="about">
                <Grid className='abutgrid' container spacing={2}>
                    {/* First column */}
                    <Grid item xs={12} sm={6} >
                        <p className='abut'>About us</p>
                        <p className='aboutdetail1'>Revolutionizing the smart home realm one home at a time, Speak Me is a state-of-the-art home automation system that empowers you to control your household device with just a voice command or a click.</p>
                        <p className='aboutdetail'> Make your traditional electronic devices smart at affordable prices, interact with them through our virtual assistant, and control them either with your voice or manually through the Speak Me user interface. With SkAI, home automation is now affordable, efficient, and hassle-free.
                        </p></Grid>
                    {/* Second column */}
                    <Grid item xs={12} sm={6} >
                        <img className='aboutimg' src={aboutusimg} />
                        {/* <video width="450" height="300" autoplay>
                            <source className='aboutvideo' src="/images/about.mp4" type="video/mp4" />
                        </video> */}
                    </Grid>
                </Grid>
            </section>
            <section data-aos="slide-up" data-aos-duration="3100" id="pricing">
                <center>
                    <p className='fetitle'>Pricing</p>
                    <p className='fetdec'>Our Pricing Plan</p>
                    <p className='prdetail'>Choose our plan and make your home smart with Speak Me at affordable prices.</p>
                    <Card className='pricingcard'>
                        <CardContent>
                            <Typography variant="body1">
                                <p>COMING SOON....</p>
                            </Typography>
                        </CardContent>
                    </Card>
                </center>
            </section>
            <section data-aos="slide-up" data-aos-duration="3100" id="achievement">
                <center>
                    <p className='fetitle'>Achievement</p>
                    <p className='fetdec'>Our achievement</p>
                    <p className='prdetail'>Reflecting on our journey of achievements and milestones.</p>

                    <Grid className='teamcon' container spacing={2}>
            {acievedetail.map((e, index) => (
                <Grid key={index} item xs={12}>
                    <Card className="teamdetails">
                        <Grid container spacing={2} alignItems="center">
                            {index % 2 === 0 ? (
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <CardMedia
                                            className='teamimg1'
                                            component="img"
                                            alt={e.name}
                                            height="auto"
                                            image={e.image}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CardContent>
                                            <Typography variant="body1">
                                                <p className='teamrole'>{e.wonposition}</p>
                                                <p className='teamrole'>{e.conducted}</p>
                                                <p className='teamrole'>{e.date}</p>
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <CardContent>
                                            <Typography variant="body1">
                                                <p className='teamrole'>{e.wonposition}</p>
                                                <p className='teamrole'>{e.conducted}</p>
                                                <p className='teamrole'>{e.date}</p>
                                            </Typography>
                                        </CardContent>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <CardMedia
                                            className='teamimg1'
                                            component="img"
                                            alt={e.name}
                                            height="auto"
                                            image={e.image}
                                        />
                                    </Grid>
                                </>
                            )}
                        </Grid>
                    </Card>
                </Grid>
            ))}
        </Grid>
                </center>
            </section>
            <section data-aos="slide-up" data-aos-duration="3100" id="team">
                <center>
                    <p className='fetitle'>Our Team</p>
                    <p className='fetdec'>Meet The Team</p>

                    <Grid className='teamcon' container spacing={2}>
                        {Teamdetail.map((e, index) => (
                            <Grid key={index} item xs={12} sm={6} md={3}>
                                <Card className="teamdetails">
                                    <CardMedia className='teamimg'
                                        component="img"
                                        alt={e.name}
                                        height="auto"
                                        image={e.image}
                                    />
                                    <CardContent>
                                        <Typography variant="body1">
                                            <p className='teamname'>{e.name}</p>
                                            <p className='teamrole'>{e.designation}</p>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </center>
            </section>
            <section data-aos="slide-up" data-aos-duration="3100" id="contact">
            <div>
                <Grid container spacing={2}>
                    {/* First column */}
                    <Grid item xs={12} sm={8} className="contact-column">
                        <p className='contitle'>CONTACT US</p>
                        <p className='contactdec'>Let’s talk about <br />Love to hear from you!</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='location'>
                                    <FontAwesomeIcon icon={faLocationDot} size="2xl" style={{color: "#ffaa00",}} /> <span>
                                        <p>Our location</p>
                                        <p>Knowledge part III, Greater Noida, Uttar Pradesh, 201310</p>
                                        </span>
                                    </td>
                                    <td className='helpdetail'>
                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{color: "#ffaa00",}} />
                                        <p>How can we help</p>
                                        <p>skai.futureishere@gmail.com</p>
                                        <p>workrsb2611@gmail.com</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Grid>
                    {/* Second column */}
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <Typography>
                                    <p className='contactdec'>Send us Message</p>
                                    <p className='fomes'>Name*</p>
                                    <TextField placeholder='nilesh singh' type="text" variant="standard" />
                                    <p className='fomes'>Email Address*</p>
                                    <TextField placeholder='example@gmail.com' type="email" variant="standard" />
                                    <p className='fomes'>Phone number*</p>
                                    <TextField placeholder='+919999999999' type="number" variant="standard" />
                                    <p className='fomes'>Message*</p>
                                    <TextField placeholder='type your message here' type="text" variant="standard" /><br />
                                    <Button className='sendmessage' variant="contained">Send Message</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </section>
            <section data-aos="slide-up" data-aos-duration="3100" id="support">
                <p className="supported">Supported by:</p>
                <Slider {...settings}>
                    {Support.map((logo, index) => (
                        <div key={index}>
                            <img className='carouselimage' src={logo.image} alt={`Partner Logo ${index + 1}`} />
                        </div>
                    ))}
                </Slider>

            </section>
            <Modal1 />
            <Footer />
        </div>
    );
}

export default Home;
