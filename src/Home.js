import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaPhoneAlt, FaPaperPlane, FaSearch, FaUser, FaCalendar, FaComments } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa6";
import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './image2/logo.png';
import banner from './image2/banner.mp4';
import service1 from './image2/asset 1.jpeg';
import service2 from './image2/asset 2.jpeg';
import service3 from './image2/asset 3.jpeg';
import view1 from './image2/asset 4.png';
import view2 from './image2/asset 5.png';
import view3 from './image2/asset 6.png';
import view4 from './image2/asset 7.png';
import view5 from './image2/asset 8.png';
import view6 from './image2/asset 9.png';
import pro1 from './image2/asset 10.jpeg'
import pro2 from './image2/asset 11.jpeg'
import pro3 from './image2/asset 12.jpeg'
import pro4 from './image2/asset 13.jpeg'
import pro5 from './image2/asset 14.jpeg'
import pro6 from './image2/asset 15.jpeg'
import pro7 from './image2/asset 16.jpeg'
import pro8 from './image2/asset 17.jpeg'
import team1 from './image2/asset 18.jpeg';
import team2 from './image2/asset 19.jpeg';
import team3 from './image2/asset 20.jpeg';
import team4 from './image2/asset 21.jpeg';
import team5 from './image2/asset 22.jpeg';
import team6 from './image2/asset 23.jpeg';
import testi1 from './image2/asset 24.jpeg';
import testi2 from './image2/asset 25.jpeg';
import blog1 from './image2/asset 26.jpeg';
import blog2 from './image2/asset 27.jpeg';
import blog3 from './image2/asset 28.jpeg';

import './home.css';
import './media.css';

const options = {
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
    }
}


const Home = () => {



    return (
        <>

            {/* Top Info Section Start */}

            <div className="top_info d-none d-lg-block">
                <Container>
                    <div className='d-flex justify-content-between align-items-center'>
                        <ul className='d-flex mb-0 ps-0'>
                            <li className='me-4'><a href=""><MdEmail style={{ marginRight: "5px", fontSize: "18px" }} />example@gmail.com</a></li>
                            <li className='me-4'><a href=""><AiFillClockCircle style={{ marginRight: "5px", fontSize: "18px" }} />Mon-Fri : 9 Am - 5 PM</a></li>
                            <li><a href=""><FaPhoneAlt style={{ marginRight: "5px", fontSize: "18px" }} />+123 -568 - 4758</a></li>
                        </ul>
                        <ul className="d-flex mb-0 ps-0">
                            <li><a href=""><FaFacebook style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                            <li><a href=""><FaTwitter style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                            <li><a href=""><FaLinkedinIn style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                            <li><a href=""><FaInstagram style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                            <li><a href=""><FaWhatsapp style={{ marginRight: '15px', fontSize: "18px" }} /></a></li>
                        </ul>
                    </div>
                </Container>
            </div>

            {/* Top Info Section End */}

            {/* Header Section Start */}
<div className='main-body'>


            <Navbar expand="lg" className="bg-body-tertiary nav">
                <Container>
                    {/* <div className="header d-flex w-100 justify-content-between"> */}
                    <Navbar.Brand href="#home">
                        <img src={logo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='menu'>Home<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Nav.Link>
                            <Nav.Link href="#link" className='menu'>About</Nav.Link>
                            <Nav.Link href="#link" className='menu'>Service<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Nav.Link>
                            {/* <NavDropdown title="Service" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href="#link" className='menu'>Pages<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Nav.Link>
                            <Nav.Link href="#link" className='menu'>Blog<IoChevronDown style={{ fontSize: "20px", marginLeft: "5px", fontWeight: 400 }} /></Nav.Link>
                            <Nav.Link href="#link" className='menu'>Contact</Nav.Link>
                            <Nav.Link href="#link" className='menu'><FaSearch /></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                    {/* </div> */}
                </Container>
            </Navbar>

            {/* Header Section End */}

            {/* Banner Section Start */}

            <div className="banner">
                <div class="content">
                    <h1>WE ARE EXPERT PLUMBERS</h1>
                    <p>A plumbing system consists of three parts an adequate potable water supply system a safe adequate drainage
                        systemand ample fixtures and equipment.</p>
                </div>
            </div>

            {/* Banner Section End */}

            {/* Service Section Start */}

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR BEST SERVICE</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 service'>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={service1} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5><a href="">Water Heaters</a></h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={service2} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5><a href="">Electrical</a></h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={service3} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5><a href="">Commercial</a></h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Service Section End */}

            {/* Overview Section End */}

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>SERVICE OVERVIEW</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 view'>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view1} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Plumber</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view2} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Water Heaters</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view3} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Kitchen Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view4} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Plumber Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view5} alt="" />
                                </div>
                                <div className="content">
                                    <h5>Gas Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            <div className="box text-center">
                                <div className="img">
                                    <img src={view6} alt="" />
                                </div>
                                <div className="content">
                                    <h5>House Repair</h5>
                                    <p className='mb-0'>Have a Business Plan for Your Plumbing Company Successful plumbers</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Overview Section End */}

            {/* Counter Section Start */}

            <div className="spacey counter">
                <Container>
                    <div className="text text-center mb-1 m-auto">
                        <h3 style={{ color: "white" }}>Some of Our Facts</h3>
                    </div>
                    <Row className='g-4 text-center'>
                        <Col xs={12} sm={6} md={6} lg={3} className='d-flex'>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className='d-flex'>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className='d-flex'>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className='d-flex'>
                            <div className="text">
                                <span>2150</span>
                                <span>+</span>
                                <p className='mb-0'>Google Reviews</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Counter Section End */}

            {/* Package Section Start */}

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>PRICING PLAN</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 package'>
                        <Col xs={12} lg={3}>
                            <div className="item text-center">
                                <h6>PLUMBER SERVICES</h6>
                                <h3>$80.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" className="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div class="item items text-center">
                                <h6>DRAINAGE SERVICES</h6>
                                <h3>$90.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" class="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div class="item text-center">
                                <h6>HEATING SERVICES</h6>
                                <h3>$95.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" class="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} lg={3}>
                            <div class="item text-center">
                                <h6>CLEANING SERVICES</h6>
                                <h3>$100.00</h3>
                                <p>Per Month</p>
                                <ul className='ps-0'>
                                    <li>1 Website</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>100 GB Disk Space</li>
                                    <li>10 My SQL Database</li>
                                    <li>100 E-mail Address</li>
                                </ul>
                                <div class="button">
                                    <a href="" class="btn">Buy Now</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Package Section End */}

            {/* Project Section Start */}

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR LATEST PROJECTS</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                </Container>
                <div className="pro">
                    <Row className='g-4 m-0'>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro1} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4 className='d-flex flex-column'><a href="">Kitchen plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro2} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Car Repair</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro3} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Water Line Repair</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro4} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Electrical plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro5} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Water Line plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro6} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">House plumber</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro7} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Glass Cleaner</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={3}>
                            <div className="box">
                                <div className="img">
                                    <img src={pro8} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Cleaning Services</a></h4>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaLink /></a> </li>
                                        <li><a href=""><FaSearch /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Project Section End */}

            {/* Team Section End */}

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR EXPERTS TEAM</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 team'>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team1} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Alonso Curtis</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team2} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Pearl Alia</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team3} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Maurice Allan</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team4} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Bellamy Kara</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team5} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Franco Dilan</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={team6} alt="" />
                                </div>
                                <div className="content text-center w-100">
                                    <h4><a href="">Kiana Mercy</a></h4>
                                    <p>Plumber</p>
                                    <ul className="link ps-0 d-flex align-items-center justify-content-center">
                                        <li><a href=""><FaFacebookF /></a> </li>
                                        <li><a href=""><FaTwitter /></a> </li>
                                        <li><a href=""><FaLinkedinIn /></a> </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Team Section End */}

            {/* Testimonial Section Start */}

            <div className="spacey">
                <div className="bg" style={{ backgroundColor: "#f7f7f7" }}>
                    <Container>
                        <div className="text text-center m-auto mb-1">
                            <h3>WHAT PEOPLE’S SAY</h3>
                            <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                        </div>
                        <OwlCarousel className='owl-theme testi' autoplayTimeout={3000} margin={20} dots={false} nav  {...options}>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi1} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Tori Araya</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi2} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Ken jackson</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi1} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Tori Araya</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                            <div class='item'>
                                <div className="img">
                                    <img src={testi2} alt="" />
                                </div>
                                <div className="content text-center">
                                    <h5>Ken jackson</h5>
                                    <p>They also maintain plumbing fixtures like bathtubs and toilets and appliances such as dishwashers or heating systems.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Container>
                </div>
            </div>

            {/* Testimonial Section End */}

            {/* Blog Section Start */}

            <div className="spacey">
                <Container>
                    <div className="text text-center m-auto mb-1">
                        <h3>OUR LATEST BLOG</h3>
                        <p>There are five main types of plumbing pipe materials that are still in use today copper galvanized steel.</p>
                    </div>
                    <Row className='g-4 blog'>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={blog1} alt="" />
                                </div>
                                <div className="content">
                                    <h6><a href="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                    <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                        includes water supply lines.</p>
                                    <ul className="comments d-flex justify-content-between mt-4 mb-0 ps-0">
                                        <li><a href=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                        <li><a href=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                        <li><a href=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={blog2} alt="" />
                                </div>
                                <div className="content">
                                    <h6><a href="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                    <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                        includes water supply lines.</p>
                                    <ul className="comments d-flex justify-content-between mt-4 mb-0 ps-0">
                                        <li><a href=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                        <li><a href=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                        <li><a href=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className="box">
                                <div className="img">
                                    <img src={blog3} alt="" />
                                </div>
                                <div className="content">
                                    <h6><a href="">NOW GRAB YOUR TOOL BELT AND GET TO WORK!</a></h6>
                                    <p>A plumbing plan illustrates the system that will bring water in and take waste back out. It typically
                                        includes water supply lines.</p>
                                    <ul className="comments d-flex justify-content-between mt-4 mb-0 ps-0">
                                        <li><a href=""><FaUser style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />Plumber</a></li>
                                        <li><a href=""><FaCalendar style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />20 july 2023</a></li>
                                        <li><a href=""><FaComments style={{ marginRight: '8px', fontSize: '16px', color: "#3787C3" }} />77</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Blog Section End */}

            {/* Newsletter Section Start */}

            <div className="news">
                <Container>
                    <Row className='g-4'>
                        <Col xs={12} md={5}>
                            <h4>For Newsletter to Subscribe</h4>
                        </Col>
                        <Col xs={12} md={7}>
                            <div class="form">
                                <input type="email" placeholder="Enter your Email" />
                                <FaPaperPlane className='plane' />
                                <div class="button">
                                    <a href="" class="btn">Subscribe Now</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Newsletter Section End */}

            {/* Footer Section Start */}

            <div className="footer">
                <div className="spacey">
                    <Container>
                        <Row className='g-4'>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <a href=""><img src={logo} alt="" /></a>
                                    <p>It is responsible for bringing clean water into the home and carrying wastewater out. Plumbing is also used for heating and cooling systems, as well as gas lines.</p>
                                </div>
                                <ul className='d-flex ps-0 mb-0'>
                                    <li><a href=""></a><FaFacebookF className='social' /></li>
                                    <li><a href=""></a><FaTwitter className='social' /></li>
                                    <li><a href=""></a><FaLinkedinIn className='social' /></li>
                                    <li><a href=""></a><FaInstagram className='social' /></li>
                                    <li><a href=""></a><FaWhatsapp className='social' /></li>
                                </ul>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <h5>Quick Links</h5>
                                    <ul className='ps-0'>
                                        <li><a href="">Our Story</a></li>
                                        <li><a href="">Career</a></li>
                                        <li><a href="">Service</a></li>
                                        <li><a href="">Schedule Service</a></li>
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">Privacy Polic</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <h5>SERVICES</h5>
                                    <ul className='ps-0'>
                                        <li><a href="">Kitchen Plumber</a></li>
                                        <li><a href="">Water Repir Plumber</a></li>
                                        <li><a href="">Ac Repair Plumber</a></li>
                                        <li><a href="">Electrical Plumber</a></li>
                                        <li><a href="">Remodeling Plumber</a></li>
                                        <li><a href="">Car Repair Plumber</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={6} lg={3}>
                                <div className="footer_head">
                                    <h5>Working Hours</h5>
                                    <ul className='ps-0'>
                                        <li style={{ marginBottom: "20px" }}>Monday - Friday 10.00am - 7.00pm</li>
                                        <li style={{ marginBottom: "20px" }}>Saturday 10.00am - 5.00pm</li>
                                        <li>Sunday Closed</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class="area">
                    <Container>
                        <div class="bottom ">
                            <p class="mb-0">© 2023 All Rights Reserved. Designed by Darshan Kakdiya</p>
                        </div>
                    </Container>
                </div>
            </div>

            </div>
            {/* Footer Section End */}


        </>
    )
}

export default Home
