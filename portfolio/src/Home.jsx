import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import project from './project';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const TabPanelProps = {
  children: null,
  index: 0,
  value: 0
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <section id="home">
        <div className="det">
          <p className="hi">Hi, my name is</p>
          <p className="name">Ankit Kumar.</p>
          <p className="skill">MERN Stack Developer</p>
          <p className="abutme">Experienced MERN Stack Developer skilled in coding and converting ideas into impactful
            digital experiences. Specializing in efficient and user-friendly web solutions from concept
            to deployment, I bring creativity and technical expertise to every project.</p>
          <Button className="Hireme" variant="primary">Connect with Me</Button>
        </div>
      </section>
      <section id="about">
        <div className='merebareme'>
          <p className='numab'><span className='numab1'>01.</span>About Me</p>
          <hr />
          <div>
            <p className='abbutme'>Hello, I'm Ankit Kumar, a Computer Science student at Sharda University.
              My passion for web development ignited early on when I learned HTML in school.
              From crafting basic websites to leading as a Web Developer at a startup,
              I've embraced the challenge of creating innovative digital experiences.</p>
            <p className='abbutme'>Currently, I'm diving deep into Data Structures and Algorithms using Java,
              honing my coding skills to build robust and scalable solutions. My journey in
              web development has been a thrilling blend of creativity and technical growth,
              and I'm excited to continue pushing boundaries in this dynamic field.</p>
            <p className='abbutme'>Here are a few technologies I’ve been working with recently:</p>
            <div className='skilltable'>
              <div className='tab1'>
                <tr >
                  <td>Javascript</td>
                  <td>Node Js</td>
                </tr>
                <tr >
                  <td>React Js</td>
                  <td>MongoDB</td>
                </tr>
                <tr >
                  <td>Java</td>
                  <td>HTML5</td>
                </tr>
                <tr >
                  <td>CSS</td>
                  <td>bootstrap</td>
                </tr>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="background">
        <p className='numab'><span className='numab1'>02.</span>Background</p>
        <Box
          sx={{ flexGrow: 1, display: 'flex', }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab className='tab1' label="Education" {...a11yProps(0)} />
            <Tab className='tab1 ' label="Experience" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <div className='education'>
              <h5 className='title'>Sharda School of Engineering and Technology(B.Tech, CSE)</h5>
              <p className='title'>2022 - Present</p>
              <p className='aboutcoll'>I'm a B.Tech student at Sharda University, actively involved in Startup Mahakumbh and MSME initiatives. Pursuing a minor in Entrepreneurship, I've also competed in hackathons like SIH, showcasing my commitment to innovation.</p>
            </div>
            <div className='education'>
              <h5 className='title'>Shri Shankar College , Sasaram(12th)</h5>
              <p className='title'>2020 - 2022</p>
            </div>
            <div className='education'>
              <h5 className='title'>Delhi public school, Durgapur(10th)</h5>
              <p className='title'>2018 - 2020</p>
            </div>
          </TabPanel>
          <TabPanel className="backvalue" value={value} index={1}>
            <div className='education'>
              <h3 className='title'>Web developer <a href="https://skaitech.vercel.app/" target="_blank">@SkAI TECH</a></h3>
              <p className='title'>2024 - Present</p>
              <p className='aboutcoll'> I am Currently serving as a full stack MERN Developer at SkAI Tech, actively involved in the ongoing development of their website to prepare for the launch of their groundbreaking home automation product in the market.</p>
            </div>
          </TabPanel>
        </Box>
      </section>
      <section id="project">
        <p className='numab'><span className='numab1'>03.</span>Some Things I've Built</p>
        <Grid className='teamcon' container spacing={2}>
          {project.map((e, index) => (
            <Grid key={index} item xs={12}>
              <Card className="projectdetails">
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
                        <CardContent >
                          <Typography variant="body1">
                            <div className='projtit'> <p className='tit'>Featured Project</p>
                              <h5 className='title'>{e.title}</h5></div>
                            <p className='education aboutcoll'>{e.description}</p>
                            <ul className='techstack'>
                              <li className='tech'>Vs code</li>
                              <li className='tech'>React Js</li>
                              <li className='tech'>Express Js</li>
                              <li className='tech'>Node Js</li>
                            </ul>
                            <div className='projtit'>
                              <a href=""><FontAwesomeIcon className='extlink' icon={faGithub} size="xl" style={{ color: "#8892b0", }} /></a>
                              {/* <a href=""><FontAwesomeIcon className='extlink' icon={faArrowUpRight} size="xl" style={{ color: "#8892b0", }} /> </a> */}
                            </div>
                          </Typography>
                        </CardContent>
                      </Grid>
                    </>
                  ) : (
                      <>
                        <Grid item xs={12} sm={6}>
                          <CardContent className='projectcont'>
                            <Typography variant="body1">
                              <p className='tit'>Featured Project</p>
                              <h5 className='title'>{e.title}</h5>
                              <p className='education aboutcoll'>{e.description}</p>
                              <ul className='techstack'>
                                <li className='tech'>Vs code</li>
                                <li className='tech'>React Js</li>
                                <li className='tech'>Express Js</li>
                                <li className='tech'>Node Js</li>
                              </ul>
                              <a href=""><FontAwesomeIcon className='extlink' icon={faGithub} size="xl" style={{ color: "#8892b0", }} /></a>
                              {/* <a href=""><FontAwesomeIcon className='extlink' icon={faArrowUpRight} size="xl" style={{ color: "#8892b0", }} /> </a> */}
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
      </section>
      <section id='contactme'>
        <center>
          <p className='what'>0.4 What next?</p>
          <h5 className='titlelast'>Get in Touch</h5>
          <p className='oppertunity' >I am currently seeking new opportunities and am open to collaborations, internships, and employment opportunities. Feel free to reach out to discuss potential partnerships or opportunities for collaboration.</p>
          <a href="mailto:itsankitkumar07@gmail.com"> <Button className='email'>Say Hello</Button></a>
        </center>
      </section>
    </>
  )
}

export default Home;
