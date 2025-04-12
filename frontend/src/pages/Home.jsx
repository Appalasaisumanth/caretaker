import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'animate.css/animate.min.css';
import 'jquery-datetimepicker/build/jquery.datetimepicker.min.css';


// Placeholder images (replace with actual assets)
const logo = 'https://via.placeholder.com/180x40.png?text=Logo';
const heroImage = 'https://via.placeholder.com/600x400.png?text=Hero+Image';
const aboutImage = 'https://via.placeholder.com/500x400.png?text=About+Image';
const signatureImage = 'https://via.placeholder.com/200x34.png?text=Signature';
const infoImage = 'https://via.placeholder.com/500x400.png?text=Info+Image';
const videoImage = 'https://via.placeholder.com/600x400.png?text=Video+Preview';
const testimonialAvatar = 'https://via.placeholder.com/50x50.png?text=Avatar';
const doctorImage = 'https://via.placeholder.com/300x300.png?text=Doctor';
const tabImage = 'https://via.placeholder.com/600x400.png?text=Tab+Image';
const blogImage = 'https://via.placeholder.com/400x300.png?text=Blog+Post';
const bannerImage = 'https://via.placeholder.com/500x400.png?text=Banner+Image';
const footerLogo = 'https://via.placeholder.com/180x40.png?text=Footer+Logo';

// Sample data
const services = [
  { icon: 'fas fa-stethoscope', title: 'Pediatrics', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-brain', title: 'Neurology', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-tint', title: 'Haematology', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-x-ray', title: 'X-Ray Diagnostic', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-heartbeat', title: 'Cardiology', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-magnet', title: 'MRI', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-microscope', title: 'Laboratory Services', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'fas fa-ambulance', title: 'Emergency Help', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
];

const testimonials = [
  { avatar: testimonialAvatar, text: 'Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna undo tempus aliquet porta vitae', name: 'Scott Boxer', title: 'Programmer' },
  { avatar: testimonialAvatar, text: 'Mauris donec ociis magnisa a sapien etiam sapien congue augue egestas et ultrice vitae purus diam integer congue magna ligula egestas', name: 'Penelopa Peterson', title: 'Project Manager' },
  { avatar: testimonialAvatar, text: 'At sagittis congue augue an egestas magna ipsum vitae purus ipsum primis undo cubilia laoreet augue', name: 'M.Scanlon', title: 'Photographer' },
  { avatar: testimonialAvatar, text: 'Mauris donec ociis magnis sapien etiam sapien congue augue pretium ligula a lectus aenean magna mauris', name: 'Jeremy Kruse', title: 'Graphic Designer' },
  { avatar: testimonialAvatar, text: 'An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum primis in augue ulta ligula egestas', name: 'Evelyn Martinez', title: 'Senior UX/UI Designer' },
  { avatar: testimonialAvatar, text: 'An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis', name: 'Dan Hodges', title: 'Internet Surfer' },
  { avatar: testimonialAvatar, text: 'Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and dolor blandit vitae', name: 'Isabel M.', title: 'SEO Manager' },
  { avatar: testimonialAvatar, text: 'Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and dolor blandit vitae', name: 'Alex Ross', title: 'Patient' },
  { avatar: testimonialAvatar, text: 'Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus magna dolor neque vitae', name: 'Alisa Milano', title: 'Housewife' },
];

const doctors = [
  { photo: doctorImage, name: 'Jonathan Barnes D.M.', specialty: 'Chief Medical Officer', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: '/doctor-1' },
  { photo: doctorImage, name: 'Hannah Harper D.M.', specialty: 'Anesthesiologist', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: '/doctor-2' },
  { photo: doctorImage, name: 'Matthew Anderson D.M.', specialty: 'Cardiology', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: '/doctor-1' },
  { photo: doctorImage, name: 'Megan Coleman D.M.', specialty: 'Neurosurgeon', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: '/doctor-2' },
];

const blogPosts = [
  { image: blogImage, title: '5 Benefits Of Integrative Medicine', date: 'May 03, 2019', author: 'Dr.Jeremy Smith', text: 'Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum, at porta justo...' },
  { image: blogImage, title: 'Your Health Is In Your Hands', date: 'Apr 28, 2019', author: 'Dr.Jonathan Barnes', text: 'Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum, at porta justo...' },
  { image: blogImage, title: 'How Weather Impacts Your Health', date: 'Apr 17, 2019', author: 'Dr.Megan Coleman', text: 'Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum, at porta justo...' },
];

const Home = () => {
  // Owl Carousel options
  const carouselOptions = {
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  // Initialize Magnific Popup
  useEffect(() => {
    if (window.jQuery) {
      window.jQuery('.mfp-iframe').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
      });
    }
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* HEADER */}
      <header id="header" className="header">
        <div className="headtoppart bg-primary text-white py-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 headertopleft">
                <div className="address d-flex align-items-center">
                  <span className="me-3">
                    <i className="fas fa-map-marker-alt me-1"></i>
                    121 King St, Melbourne, VIC 3000
                  </span>
                  <a href="tel:+8005697890" className="callusbtn text-white">
                    <i className="fas fa-phone me-1"></i>
                    (800)-569-7890
                  </a>
                </div>
              </div>
              <div className="col-md-6 headertopright text-end">
                <a className="googleicon mx-2" title="Google" href="#">
                  <i className="fab fa-google"></i>
                  <span className="d-none d-md-inline ms-1">Google</span>
                </a>
                <a className="linkedinicon mx-2" title="Linkedin" href="#">
                  <i className="fab fa-linkedin-in"></i>
                  <span className="d-none d-md-inline ms-1">Linkedin</span>
                </a>
                <a className="twittericon mx-2" title="Twitter" href="#">
                  <i className="fab fa-twitter"></i>
                  <span className="d-none d-md-inline ms-1">Twitter</span>
                </a>
                <a className="facebookicon mx-2" title="Facebook" href="#">
                  <i className="fab fa-facebook-f"></i>
                  <span className="d-none d-md-inline ms-1">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img src={logo} width="180" height="40" alt="header-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="homeDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                    {['demo-2', 'demo-3', 'demo-4', 'demo-5', 'demo-6', 'demo-7', 'demo-8', 'demo-9', 'demo-10', 'demo-11', 'demo-12'].map((demo, index) => (
                      <li key={index}>
                        <NavLink className="dropdown-item" to={`/${demo}`}>
                          Home Concept #{index + 2}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown mega-menu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pagesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu mega-menu-content p-4" aria-labelledby="pagesDropdown">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3 col-md-6">
                          <h6 className="title">Standard Pages</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="/about-us">About Us Page</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/who-we-are">Who We Are</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/all-services">Our Services</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/service-1">Service Single #1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/service-2">Service Single #2</NavLink></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h6 className="title">Medical Pages</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="/all-departments">Our Departments</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/department-single">Department Single</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/all-doctors">Meet the Doctors</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/doctor-1">Doctor's Profile #1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/doctor-2">Doctor's Profile #2</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/timetable">Doctors Timetable</NavLink></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h6 className="title">Special Pages</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="/pricing-1">Pricing Packages #1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/pricing-2">Pricing Packages #2</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/appointment">Make an Appointment</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/faqs">FAQs Page</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/terms">Terms of Use</NavLink></li>
                          </ul>
                        </div>
                        <div className="col-lg-3 col-md-6">
                          <h6 className="title">Auxiliary Pages</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="/gallery">Our Gallery</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/blog-listing">Blog Listing Page</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/single-post">Single Blog Post</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/contacts-1">Contact Us #1</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/contacts-2">Contact Us #2</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="halfMenuDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Half Menu
                  </a>
                  <div className="dropdown-menu half-menu p-4" aria-labelledby="halfMenuDropdown">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-6">
                          <h6 className="title">For Patients</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="#">Meet The Doctors</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Patient Info Sheets</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Online Patients Portal</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Patients Testimonials</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Blog & Latest News</NavLink></li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <h6 className="title">Quick Links</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="#">Terms & Privacy Policy</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Donor Privacy Policy</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Workers Compensation</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Insurance Information</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">After Hours Care</NavLink></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown mega-menu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="megaMenuDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mega Menu
                  </a>
                  <div className="dropdown-menu mega-menu-content p-4" aria-labelledby="megaMenuDropdown">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-3">
                          <h6 className="title">Quick Links</h6>
                          <ul className="list-unstyled">
                            <li><NavLink className="dropdown-item" to="#">For Referring Doctors</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Terms & Privacy Policy</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Donor Privacy Policy</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Patient Info Sheets</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Online Patients Portal</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Insurance Information</NavLink></li>
                            <li><NavLink className="dropdown-item" to="#">Patients Testimonials</NavLink></li>
                          </ul>
                        </div>
                        <div className="col-lg-5">
                          <h6 className="title">Featured News</h6>
                          <div className="mb-3">
                            <img src="https://via.placeholder.com/300x150.png?text=Featured+News" className="img-fluid" alt="featured-news" />
                          </div>
                          <h5 className="h5-xs"><NavLink to="#">5 Benefits of integrative medicine</NavLink></h5>
                          <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit magna purus at pretium gravida donec</p>
                        </div>
                        <div className="col-lg-4">
                          <h6 className="title">Latest News</h6>
                          <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-2">
                              <img src="https://via.placeholder.com/50x50.png?text=Post" className="img-fluid me-2" alt="blog-post-preview" />
                              <div>
                                <NavLink to="/single-post">Etiam sapien risus ante auctor tempus accumsan an empor ...</NavLink>
                                <p className="mb-0">43 Comments</p>
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-2">
                              <img src="https://via.placeholder.com/50x50.png?text=Post" className="img-fluid me-2" alt="blog-post-preview" />
                              <div>
                                <NavLink to="/single-post">Blandit tempor a sapien ipsum, porta risus auctor justo ...</NavLink>
                                <p className="mb-0">38 Comments</p>
                              </div>
                            </li>
                            <li className="d-flex align-items-center">
                              <img src="https://via.placeholder.com/50x50.png?text=Post" className="img-fluid me-2" alt="blog-post-preview" />
                              <div>
                                <NavLink to="/single-post">Cursus risus auctor tempus risus laoreet turpis auctor varius ...</NavLink>
                                <p className="mb-0">29 Comments</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">Simple Link</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary text-white px-3 py-2" to="/appointment">
                    Make an Appointment
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* PAGE CONTENT */}
      <div id="page" className="page">
        {/* HERO-1 */}
        <section id="hero-1" className="bg-light hero-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <div className="hero-txt mb-40">
                  <h5 className="text-primary">Welcome To Our Clinic</h5>
                  <h2 className="text-primary">Take Care of Your Health</h2>
                  <p className="p-md">Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem primis in orci integer mollis</p>
                  <Link to="/about-us" className="btn btn-primary">More About Clinic</Link>
                </div>
              </div>
              <div className="col-md-4 col-lg-5 col-xl-6">
                <div className="hero-1-img text-center">
                  <img className="img-fluid" src={heroImage} alt="hero-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT-1 */}
        <section id="about-1" className="about-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div id="abox-1" className="col-md-6 col-lg-3">
                <div className="card text-white bg-primary">
                  <h5 className="h5-md">Working Time</h5>
                  <table className="table text-white">
                    <tbody>
                      <tr>
                        <td>Mon – Wed</td>
                        <td>-</td>
                        <td className="text-right">9:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>-</td>
                        <td className="text-right">9:00 AM - 6:30 PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>-</td>
                        <td className="text-right">9:00 AM - 6:00 PM</td>
                      </tr>
                      <tr className="last-tr">
                        <td>Sun - Sun</td>
                        <td>-</td>
                        <td className="text-right">CLOSED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div id="abox-2" className="col-md-6 col-lg-3">
                <div className="card text-white bg-primary">
                  <h5 className="h5-md">Doctors Timetable</h5>
                  <p>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
                  <Link to="/timetable" className="btn btn-sm btn-outline-light mt-25">View Timetable</Link>
                </div>
              </div>
              <div id="abox-3" className="col-md-6 col-lg-3">
                <div className="card text-white bg-primary">
                  <h5 className="h5-md">Appointments</h5>
                  <p>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
                  <Link to="/appointment" className="btn btn-sm btn-outline-light mt-25">Make an Appointment</Link>
                </div>
              </div>
              <div id="abox-4" className="col-md-6 col-lg-3">
                <div className="card text-white bg-primary">
                  <h5 className="h5-md">Emergency Cases</h5>
                  <h5 className="h5-lg emergency-call"><i className="fas fa-phone"></i> 1-800-123-4560</h5>
                  <p className="mt-20">An magnis nulla dolor sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT-5 */}
        <section id="about-5" className="pt-5 about-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="about-img text-center animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                  <img className="img-fluid" src={aboutImage} alt="about-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="txt-block pc-30 animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id text-primary">Welcome to Home</span>
                  <h3 className="h3-md text-primary">Complete Medical Solutions in One Place</h3>
                  <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollis lorem primis in orci integer metus mollis faucibus.</p>
                  <div className="singnature mt-4">
                    <p className="p-small mb-15">Randon Pexon, Head of Clinic</p>
                    <img className="img-fluid" src={signatureImage} width="200" height="34" alt="signature-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES-3 */}
        <section id="services-3" className="bg-light wide-100 services-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md text-primary">Total Health Care Solutions</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel className="owl-theme" {...carouselOptions}>
                  {services.map((service, index) => (
                    <div className="card p-4 m-2" key={index}>
                      <div className="text-center">
                        <i className={`${service.icon} fa-2x text-primary`}></i>
                      </div>
                      <h5 className="h5-xs text-primary text-center mt-3">{service.title}</h5>
                      <p className="text-center">{service.description}</p>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        {/* INFO-2 */}
        <section id="info-2" className="wide-60 info-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="txt-block pc-30 mb-40 animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id text-primary">Best Practices</span>
                  <h3 className="h3-md text-primary">Clinic with Innovative Approach to Treatment</h3>
                  <p className="mb-4">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet.</p>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="d-flex align-items-center m-top-15">
                        <i className="fas fa-angle-double-right text-primary mr-2"></i>
                        <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-angle-double-right text-primary mr-2"></i>
                        <p className="p-sm">Magna luctus tempor</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-angle-double-right text-primary mr-2"></i>
                        <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="d-flex align-items-center">
                        <i className="fas fa-angle-double-right text-primary mr-2"></i>
                        <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                      </div>
                      <div className="d-flex align-items-center m-top-15">
                        <i className="fas fa-angle-double-right text-primary mr-2"></i>
                        <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fas fa-angle-double-right text-primary mr-2"></i>
                        <p className="p-sm">An enim nullam tempor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-2-img animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                  <img className="img-fluid" src={infoImage} alt="info-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFO-6 */}
        <section id="info-6" className="bg-primary info-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 offset-lg-6">
                <div className="txt-block pc-30 text-white animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id text-light">Qualified Doctors</span>
                  <h3 className="h3-md">Group of Certified and Experienced Doctors</h3>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-genderless text-light mr-2 mt-2"></i>
                    <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor.</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-genderless text-light mr-2 mt-2"></i>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-genderless text-light mr-2 mt-2"></i>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna purus pretium.</p>
                  </div>
                  <Link to="/all-doctors" className="btn btn-outline-light mt-4">Meet The Doctors</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="info-6-img text-center">
            <img className="img-fluid" src={infoImage} alt="info-6-image" />
          </div>
        </section>

        {/* VIDEO-1 */}
        <section id="video-1" className="wide-60 video-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="txt-block pc-30 mb-40 animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id text-primary">Highest Quality Care</span>
                  <h3 className="h3-md text-primary">Solutions to Complex Medical Problems</h3>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-genderless text-primary mr-2 mt-2"></i>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-genderless text-primary mr-2 mt-2"></i>
                    <p>Gravida quis vehicula magna luctus tempor quisque vel laoreet turpis urna augue, viverra a augue eget dictum</p>
                  </div>
                  <div className="d-flex align-items-start">
                    <i className="fas fa-genderless text-primary mr-2 mt-2"></i>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="video-preview mb-40 text-center animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                  <a className="mfp-iframe" href="https://www.youtube.com/embed/SZEflIVnhH8">
                    <div className="video-btn play-icon-blue">
                      <div className="video-block-wrapper">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={videoImage} alt="video-photo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS-2 */}
        <section id="reviews-2" className="bg-light wide-100 reviews-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md text-primary">What Our Patients Say</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <OwlCarousel className="owl-theme" {...carouselOptions}>
                  {testimonials.map((testimonial, index) => (
                    <div className="card p-4 m-2 text-center" key={index}>
                      <div className="testimonial-avatar">
                        <img src={testimonial.avatar} alt="testimonial-avatar" />
                      </div>
                      <p>{testimonial.text}</p>
                      <div className="review-author">
                        <h5 className="h5-sm">{testimonial.name}</h5>
                        <span>{testimonial.title}</span>
                      </div>
                    </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </section>

        {/* DOCTORS-1 */}
        <section id="doctors-1" className="wide-40 doctors-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md text-primary">Our Medical Specialists</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              {doctors.map((doctor, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card">
                    <div className="text-center">
                      <img className="img-fluid" src={doctor.photo} alt="doctor-foto" />
                      <div className="card-body">
                        <Link to={doctor.link} className="btn btn-sm btn-outline-primary">View More Info</Link>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="h5-sm text-primary">{doctor.name}</h5>
                      <span className="text-primary">{doctor.specialty}</span>
                      <p className="p-sm">{doctor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="all-doctors mb-40">
                  <Link to="/all-doctors" className="btn btn-primary">Meet All Doctors</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFO-8 */}
        <section id="info-8" className="info-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-5">
                <div className="txt-block pc-30 text-white animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <h4 className="h4-sm">Opening Hours:</h4>
                  <p>Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor tempus feugiat dolor lacinia cursus vitae massa</p>
                  <table className="table text-white">
                    <tbody>
                      <tr>
                        <td>Mon – Wed</td>
                        <td>-</td>
                        <td className="text-right">9:00 AM - 7:00 PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>-</td>
                        <td className="text-right">9:00 AM - 6:30 PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>-</td>
                        <td className="text-right">9:00 AM - 6:00 PM</td>
                      </tr>
                      <tr className="last-tr">
                        <td>Sun - Sun</td>
                        <td>-</td>
                        <td className="text-right">Closed</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5 className="h5-md">Need a personal health plan?</h5>
                  <p>Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor tempus feugiat dolor lacinia undo cursus nulla massa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-8-img text-center">
            <img className="img-fluid" src={infoImage} alt="info-8-image" />
          </div>
        </section>

        {/* TABS-1 */}
        <section id="tabs-1" className="wide-100 tabs-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="tabs-nav" className="list-group text-center">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="tab1-list" data-bs-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                        <i className="fas fa-stethoscope"></i> Pediatrics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tab2-list" data-bs-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">
                        <i className="fas fa-tint"></i> Hematology
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tab3-list" data-bs-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
                        <i className="fas fa-magnet"></i> MRI
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="tab4-list" data-bs-toggle="pill" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">
                        <i className="fas fa-x-ray"></i> X-Ray Diagnostics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" src={tabImage} alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md text-primary">Pediatrics</h3>
                          <p className="mb-4">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet.</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <Link to="/service-1" className="btn btn-primary mt-4">View More Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" src={tabImage} alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md text-primary">Hematology</h3>
                          <p className="mb-4">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet.</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <Link to="/service-2" className="btn btn-primary mt-4">View More Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" src={tabImage} alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md text-primary">MRI Diagnostic</h3>
                          <p className="mb-4">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet.</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <Link to="/service-1" className="btn btn-primary mt-4">View More Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" src={tabImage} alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md text-primary">X-Ray Diagnostic</h3>
                          <p className="mb-4">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet.</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="d-flex align-items-center m-top-15">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="d-flex align-items-center">
                                <i className="fas fa-angle-double-right text-primary mr-2"></i>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <Link to="/service-2" className="btn btn-primary mt-4">View More Details</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTIC-1 */}
        <div id="statistic-1" className="bg-primary statistic-section division">
          <div className="container text-white">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                  <i className="fas fa-heartbeat fa-lg"></i>
                  <h5 className="statistic-number">9,632</h5>
                  <p className="txt-400">Happy Patients</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                  <i className="fas fa-user-md fa-lg"></i>
                  <h5 className="statistic-number">178</h5>
                  <p className="txt-400">Qualified Doctors</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                  <i className="fas fa-hospital fa-lg"></i>
                  <h5 className="statistic-number">864</h5>
                  <p className="txt-400">Clinic Rooms</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block animate__animated animate__fadeInUp" data-wow-delay="1s">
                  <i className="fas fa-handshake fa-lg"></i>
                  <h5 className="statistic-number">473</h5>
                  <p className="txt-400">Local Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PRICING-1 */}
        <section id="pricing-1" className="wide-60 pricing-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md text-primary">Best Quality Medical Treatment</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row pricing-row">
              <div className="col-lg-4">
                <div className="card p-4">
                  <i className="fas fa-vial fa-2x text-primary"></i>
                  <h5 className="h5-lg text-primary">Blood Test</h5>
                  <div className="pricing-plan">
                    <sup className="text-primary">$</sup>
                    <span className="price text-primary">45</span>
                    <p className="p-md">monthly</p>
                  </div>
                  <ul className="list-unstyled">
                    <li>Medical Specialties</li>
                    <li>Medical Consultation</li>
                    <li>Investigations</li>
                    <li>Medical Treatments</li>
                  </ul>
                  <Link to="#" className="btn btn-outline-primary">Select Plan</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card p-4">
                  <i className="fas fa-clinic-medical fa-2x text-primary"></i>
                  <h5 className="h5-lg text-primary">Medical Care</h5>
                  <div className="pricing-plan">
                    <sup className="text-primary">$</sup>
                    <span className="price text-primary">350</span>
                    <p className="p-md">monthly</p>
                  </div>
                  <ul className="list-unstyled">
                    <li>Medical Specialties</li>
                    <li>Medical Consultation</li>
                    <li>Investigations</li>
                    <li>Medical Treatments</li>
                  </ul>
                  <Link to="#" className="btn btn-primary">Select Plan</Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card p-4">
                  <i className="fas fa-ambulance fa-2x text-primary"></i>
                  <h5 className="h5-lg text-primary">Emergency Care</h5>
                  <div className="pricing-plan">
                    <sup className="text-primary">$</sup>
                    <span className="price text-primary">650</span>
                    <p className="p-md">monthly</p>
                  </div>
                  <ul className="list-unstyled">
                    <li>Medical Specialties</li>
                    <li>Medical Consultation</li>
                    <li>Investigations</li>
                    <li>Medical Treatments</li>
                  </ul>
                  <Link to="#" className="btn btn-outline-primary">Select Plan</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER-1 */}
        <section id="banner-1" className="bg-primary banner-section division">
          <div className="container text-white">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7">
                <div className="banner-1-txt">
                  <h3 className="h3-md">Do You Need a Complete Checkup?</h3>
                  <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus</p>
                  <Link to="/appointment" className="btn btn-outline-light">Make an Appointment</Link>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="banner-1-img text-center">
                  <img className="img-fluid" src={bannerImage} alt="banner-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG-1 */}
        <section id="blog-1" className="wide-60 blog-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md text-primary">Our Stories, Tips & Latest News</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              {blogPosts.map((post, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card">
                    <div className="blog-post-img">
                      <img className="img-fluid" src={post.image} alt="blog-post-image" />
                    </div>
                    <div className="card-body">
                      <h5 className="h5-sm text-primary">{post.title}</h5>
                      <ul className="blog-post-meta list-unstyled">
                        <li className="post-date">{post.date}</li>
                        <li className="post-author">By {post.author}</li>
                      </ul>
                      <p>{post.text}</p>
                      <Link to="/single-post" className="btn btn-sm btn-outline-primary">Read More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER-1 */}
        <footer id="footer-1" className="footer division">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="footer-info mb-40">
                  <img src={footerLogo} width="180" height="40" alt="footer-logo" />
                  <p className="p-sm mt-20">Aliquam orci a nullam tempor sapien gravida donec pretium ipsum porta justo integer at odio velna auctor integer an auctor</p>
                  <div className="footer-socials-links mt-20">
                    <a href="#" className="mx-2"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" className="mx-2"><i className="fab fa-google"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-box mb-40">
                  <h5 className="h5-md text-primary">Contact Info</h5>
                  <p className="p-sm">121 King Street, Melbourne, Victoria 3000</p>
                  <p className="p-sm"><a href="mailto:yourdomain@company.com">yourdomain@company.com</a></p>
                  <p className="p-sm foo-phone"><i className="fas fa-phone mr-2"></i> (800)-569-7890</p>
                  <p className="p-sm foo-fax"><i className="fas fa-fax mr-2"></i> (800)-569-7890</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-box mb-40">
                  <h5 className="h5-md text-primary">Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/all-services">Our Services</Link></li>
                    <li><Link to="/all-doctors">Meet Our Doctors</Link></li>
                    <li><Link to="/appointment">Make an Appointment</Link></li>
                    <li><Link to="/blog-listing">Latest News</Link></li>
                    <li><Link to="/contacts-1">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-box mb-40">
                  <h5 className="h5-md text-primary">Working Hours</h5>
                  <p className="p-sm">Mon – Wed - <span>9:00 AM - 7:00 PM</span></p>
                  <p className="p-sm">Thursday - <span>9:00 AM - 6:30 PM</span></p>
                  <p className="p-sm">Friday - <span>9:00 AM - 6:00 PM</span></p>
                  <p className="p-sm">Sat - Sun - <span>Closed</span></p>
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <div className="row">
                <div className="col-md-12">
                  <p className="footer-copyright">&copy; 2025 Caretaker. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;