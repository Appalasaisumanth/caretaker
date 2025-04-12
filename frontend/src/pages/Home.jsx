import React from 'react';
import './css/bootstrap.min.css';
import './css/fontawesome.min.css';
import './css/flaticon.css';
import './css/menu.css';
import './css/dropdown-effects/fade-down.css';
import './css/magnific-popup.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/animate.css';
import './css/jquery.datetimepicker.min.css';
import './css/style.css';
import './css/responsive.css';

// Sample data for dynamic sections
const services = [
  { icon: 'flaticon-083-stethoscope', title: 'Pediatrics', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-047-head', title: 'Neurology', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-015-blood-donation-1', title: 'Haematology', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-048-lungs', title: 'X-Ray Diagnostic', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-060-cardiogram-4', title: 'Cardiology', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-031-scanner', title: 'MRI', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-076-microscope', title: 'Laboratory Services', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
  { icon: 'flaticon-068-ambulance-3', title: 'Emergency Help', description: 'Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus' },
];

const testimonials = [
  { avatar: '', text: 'Etiam sapien sem at sagittis congue an augue massa varius egestas a suscipit magna undo tempus aliquet porta vitae', name: 'Scott Boxer', title: 'Programmer' },
  { avatar: '', text: 'Mauris donec ociis magnisa a sapien etiam sapien congue augue egestas et ultrice vitae purus diam integer congue magna ligula egestas', name: 'Penelopa Peterson', title: 'Project Manager' },
  { avatar: '', text: 'At sagittis congue augue an egestas magna ipsum vitae purus ipsum primis undo cubilia laoreet augue', name: 'M.Scanlon', title: 'Photographer' },
  { avatar: '', text: 'Mauris donec ociis magnis sapien etiam sapien congue augue pretium ligula a lectus aenean magna mauris', name: 'Jeremy Kruse', title: 'Graphic Designer' },
  { avatar: '', text: 'An augue in cubilia laoreet magna suscipit egestas magna ipsum at purus ipsum primis in augue ulta ligula egestas', name: 'Evelyn Martinez', title: 'Senior UX/UI Designer' },
  { avatar: '', text: 'An augue cubilia laoreet undo magna at risus suscipit egestas magna an ipsum ligula vitae and purus ipsum primis', name: 'Dan Hodges', title: 'Internet Surfer' },
  { avatar: '', text: 'Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and dolor blandit vitae', name: 'Isabel M.', title: 'SEO Manager' },
  { avatar: '', text: 'Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus and dolor blandit vitae', name: 'Alex Ross', title: 'Patient' },
  { avatar: '', text: 'Augue egestas volutpat egestas augue in cubilia laoreet magna suscipit luctus magna dolor neque vitae', name: 'Alisa Milano', title: 'Housewife' },
];

const doctors = [
  { photo: '', name: 'Jonathan Barnes D.M.', specialty: 'Chief Medical Officer', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: 'doctor-1.html' },
  { photo: '', name: 'Hannah Harper D.M.', specialty: 'Anesthesiologist', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: 'doctor-2.html' },
  { photo: '', name: 'Matthew Anderson D.M.', specialty: 'Cardiology', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: 'doctor-1.html' },
  { photo: '', name: 'Megan Coleman D.M.', specialty: 'Neurosurgeon', description: 'Donec vel sapien augue integer turpis cursus porta, mauris sed augue luctus magna dolor luctus ipsum neque', link: 'doctor-2.html' },
];

const blogPosts = [
  { image: '', title: '5 Benefits Of Integrative Medicine', date: 'May 03, 2019', author: 'Dr.Jeremy Smith', text: 'Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum, at porta justo...' },
  { image: '', title: 'Your Health Is In Your Hands', date: 'Apr 28, 2019', author: 'Dr.Jonathan Barnes', text: 'Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum, at porta justo...' },
  { image: '', title: 'How Weather Impacts Your Health', date: 'Apr 17, 2019', author: 'Dr.Megan Coleman', text: 'Quaerat neque purus ipsum neque dolor primis libero tempus impedit tempor blandit sapien at gravida donec ipsum, at porta justo...' },
];

const Home = () => {
  return (
    <div className="wsmenucontainer">
      {/* HEADER */}
      <header id="header" className="header">
        {/* Mobile Header */}
        <div className="wsmobileheader clearfix">
          <a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>
          <span className="smllogo"><img width="180" height="40" alt="mobile-logo" /></span>
          <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone"></i></a>
        </div>

        {/* Header Strip */}
        <div className="headtoppart bg-blue clearfix">
          <div className="headerwp clearfix">
            <div className="headertopleft">
              <div className="address clearfix">
                <span><i className="fas fa-map-marker-alt"></i>121 King St, Melbourne, VIC 3000</span>
                <a href="tel:123456789" className="callusbtn"><i className="fas fa-phone"></i>(800)-569-7890</a>
              </div>
            </div>
            <div className="headertopright">
              <a className="googleicon" title="Google" href="#"><i className="fab fa-google"></i> <span className="mobiletext02">Google</span></a>
              <a className="linkedinicon" title="Linkedin" href="#"><i className="fab fa-linkedin-in"></i> <span className="mobiletext02">Linkedin</span></a>
              <a className="twittericon" title="Twitter" href="#"><i className="fab fa-twitter"></i> <span className="mobiletext02">Twitter</span></a>
              <a className="facebookicon" title="Facebook" href="#"><i className="fab fa-facebook-f"></i> <span className="mobiletext02">Facebook</span></a>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="wsmainfull menu clearfix">
          <div className="wsmainwp clearfix">
            <div className="desktoplogo"><a href="#hero-1"><img width="180" height="40" alt="header-logo" /></a></div>
            <nav className="wsmenu clearfix">
              <ul className="wsmenu-list">
                <li>
                  <a href="#">Home <span className="wsarrow"></span></a>
                  <ul className="sub-menu">
                    {['demo-2.html', 'demo-3.html', 'demo-4.html', 'demo-5.html', 'demo-6.html', 'demo-7.html', 'demo-8.html', 'demo-9.html', 'demo-10.html', 'demo-11.html', 'demo-12.html'].map((demo, index) => (
                      <li key={index}><a href={demo}>Home Concept #{index + 2}</a></li>
                    ))}
                  </ul>
                </li>
                <li>
                  <a href="#">Pages <span className="wsarrow"></span></a>
                  <div className="wsmegamenu clearfix">
                    <div className="container">
                      <div className="row">
                        <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <li className="title">Standard Pages:</li>
                          <li><a href="about-us.html">About Us Page</a></li>
                          <li><a href="who-we-are.html">Who We Are</a></li>
                          <li><a href="all-services.html">Our Services</a></li>
                          <li><a href="service-1.html">Service Single #1</a></li>
                          <li><a href="service-2.html">Service Single #2</a></li>
                        </ul>
                        <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <li className="title">Medical Pages:</li>
                          <li><a href="all-departments.html">Our Departments</a></li>
                          <li><a href="department-single.html">Department Single</a></li>
                          <li><a href="all-doctors.html">Meet the Doctors</a></li>
                          <li><a href="doctor-1.html">Doctor's Profile #1</a></li>
                          <li><a href="doctor-2.html">Doctor's Profile #2</a></li>
                          <li><a href="timetable.html">Doctors Timetable</a></li>
                        </ul>
                        <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <li className="title">Special Pages:</li>
                          <li><a href="pricing-1.html">Pricing Packages #1</a></li>
                          <li><a href="pricing-2.html">Pricing Packages #2</a></li>
                          <li><a href="appointment.html">Make an Appointment</a></li>
                          <li><a href="faqs.html">FAQs Page</a></li>
                          <li><a href="terms.html">Terms of Use</a></li>
                        </ul>
                        <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <li className="title">Auxiliary Pages:</li>
                          <li><a href="gallery.html">Our Gallery</a></li>
                          <li><a href="blog-listing.html">Blog Listing Page</a></li>
                          <li><a href="single-post.html">Single Blog Post</a></li>
                          <li><a href="contacts-1.html">Contact Us #1</a></li>
                          <li><a href="contacts-2.html">Contact Us #2</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Half Menu <span className="wsarrow"></span></a>
                  <div className="wsmegamenu clearfix halfmenu">
                    <div className="container-fluid">
                      <div className="row">
                        <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                          <li className="title">For Patients:</li>
                          <li><a href="#">Meet The Doctors</a></li>
                          <li><a href="#">Patient Info Sheets</a></li>
                          <li><a href="#">Online Patients Portal</a></li>
                          <li><a href="#">Patients Testimonials</a></li>
                          <li><a href="#">Blog & Latest News</a></li>
                        </ul>
                        <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                          <li className="title">Quick Links:</li>
                          <li><a href="#">Terms & Privacy Policy</a></li>
                          <li><a href="#">Donor Privacy Policy</a></li>
                          <li><a href="#">Workers Compensation</a></li>
                          <li><a href="#">Insurance Information</a></li>
                          <li><a href="#">After Hours Care</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Mega Menu <span className="wsarrow"></span></a>
                  <div className="wsmegamenu clearfix">
                    <div className="container">
                      <div className="row">
                        <ul className="col-lg-3 col-md-12 col-xs-12 link-list">
                          <li className="title">Quick Links:</li>
                          <li><a href="#">For Referring Doctors</a></li>
                          <li><a href="#">Terms & Privacy Policy</a></li>
                          <li><a href="#">Donor Privacy Policy</a></li>
                          <li><a href="#">Patient Info Sheets</a></li>
                          <li><a href="#">Online Patients Portal</a></li>
                          <li><a href="#">Insurance Information</a></li>
                          <li><a href="#">Patients Testimonials</a></li>
                        </ul>
                        <div className="col-lg-5 col-md-12 col-xs-12">
                          <h3 className="title">Featured News:</h3>
                          <div className="fluid-width-video-wrapper">
                            <img alt="featured-news" />
                          </div>
                          <h5 className="h5-xs"><a href="#">5 Benefits of integrative medicine</a></h5>
                          <p className="wsmwnutxt">Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor impedit magna purus at pretium gravida donec</p>
                        </div>
                        <div className="col-lg-4 col-md-12 col-xs-12">
                          <h3 className="title">Latest News:</h3>
                          <ul className="latest-news">
                            <li className="clearfix d-flex align-items-center">
                              <img className="img-fluid" alt="blog-post-preview" />
                              <div className="post-summary">
                                <a href="single-post.html">Etiam sapien risus ante auctor tempus accumsan an empor ...</a>
                                <p>43 Comments</p>
                              </div>
                            </li>
                            <li className="clearfix d-flex align-items-center">
                              <img className="img-fluid" alt="blog-post-preview" />
                              <div className="post-summary">
                                <a href="single-post.html">Blandit tempor a sapien ipsum, porta risus auctor justo ...</a>
                                <p>38 Comments</p>
                              </div>
                            </li>
                            <li className="clearfix d-flex align-items-center">
                              <img className="img-fluid" alt="blog-post-preview" />
                              <div className="post-summary">
                                <a href="single-post.html">Cursus risus auctor tempus risus laoreet turpis auctor varius ...</a>
                                <p>29 Comments</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nl-simple"><a href="#">Simple Link</a></li>
                <li className="nl-simple header-btn"><a href="appointment.html">Make an Appointment</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <div id="page" className="page">
        {/* HERO-1 */}
        <section id="hero-1" className="bg-fixed hero-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <div className="hero-txt mb-40">
                  <h5 className="steelblue-color">Welcome To Our Clinic</h5>
                  <h2 className="steelblue-color">Take Care of Your Health</h2>
                  <p className="p-md">Feugiat primis ligula risus auctor egestas augue mauri viverra tortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem primis in orci integer mollis</p>
                  <a href="about-us.html" className="btn btn-blue blue-hover">More About Clinic</a>
                </div>
              </div>
              <div className="col-md-4 col-lg-5 col-xl-6">
                <div className="hero-1-img text-center">
                  <img className="img-fluid" alt="hero-image" />
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
                <div className="abox-1 white-color">
                  <h5 className="h5-md">Working Time</h5>
                  <table className="table white-color">
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
                <div className="abox-1 white-color">
                  <h5 className="h5-md">Doctors Timetable</h5>
                  <p>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
                  <a href="timetable.html" className="btn btn-sm btn-tra-white mt-25">View Timetable</a>
                </div>
              </div>
              <div id="abox-3" className="col-md-6 col-lg-3">
                <div className="abox-1 white-color">
                  <h5 className="h5-md">Appointments</h5>
                  <p>An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
                  <a href="#" className="btn btn-sm btn-tra-white mt-25">Make an Appointment</a>
                </div>
              </div>
              <div id="abox-4" className="col-md-6 col-lg-3">
                <div className="abox-1 white-color">
                  <h5 className="h5-md">Emergency Cases</h5>
                  <h5 className="h5-lg emergency-call"><i className="fas fa-phone"></i> 1-800-123-4560</h5>
                  <p className="mt-20">An magnis nulla dolor sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT-5 */}
        <section id="about-5" className="pt-100 about-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="about-img text-center wow fadeInUp" data-wow-delay="0.6s">
                  <img className="img-fluid" alt="about-image" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="txt-block pc-30 wow fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id blue-color">Welcome to Home</span>
                  <h3 className="h3-md steelblue-color">Complete Medical Solutions in One Place</h3>
                  <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue</p>
                  <div className="singnature mt-35">
                    <p className="p-small mb-15">Randon Pexon, Head of Clinic</p>
                    <img className="img-fluid" width="200" height="34" alt="signature-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES-3 */}
        <section id="services-3" className="bg-lightgrey wide-100 services-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md steelblue-color">Total Health Care Solutions</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme services-holder">
                  {services.map((service, index) => (
                    <div className="sbox-3 icon-sm" key={index}>
                      <div className="sbox-3-icon">
                        <span className={service.icon}></span>
                      </div>
                      <h5 className="h5-xs steelblue-color">{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFO-2 */}
        <section id="info-2" className="wide-60 info-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id blue-color">Best Practices</span>
                  <h3 className="h3-md steelblue-color">Clinic with Innovative Approach to Treatment</h3>
                  <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet augue posuere and curae integer congue leo metus mollis primis and mauris</p>
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="box-list m-top-15">
                        <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                        <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                      </div>
                      <div className="box-list">
                        <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                        <p className="p-sm">Magna luctus tempor</p>
                      </div>
                      <div className="box-list">
                        <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                        <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="box-list">
                        <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                        <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                      </div>
                      <div className="box-list m-top-15">
                        <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                        <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                      </div>
                      <div className="box-list">
                        <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                        <p className="p-sm">An enim nullam tempor</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info-2-img wow fadeInUp" data-wow-delay="0.6s">
                  <img className="img-fluid" alt="info-image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INFO-6 */}
        <section id="info-6" className="bg-blue info-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 offset-lg-6">
                <div className="txt-block pc-30 white-color wow fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id id-color">Qualified Doctors</span>
                  <h3 className="h3-md">Group of Certified and Experienced Doctors</h3>
                  <div className="box-list">
                    <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                    <p>Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis urna augue, viverra a augue eget, dictum tempor diam pulvinar massa purus nulla</p>
                  </div>
                  <div className="box-list">
                    <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
                  </div>
                  <div className="box-list">
                    <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna purus pretium gravida donec ligula massa in faucibus</p>
                  </div>
                  <a href="all-doctors.html" className="btn btn-tra-white blue-hover mt-25">Meet The Doctors</a>
                </div>
              </div>
            </div>
          </div>
          <div className="info-6-img text-center"></div>
        </section>

        {/* VIDEO-1 */}
        <section id="video-1" className="wide-60 video-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="txt-block pc-30 mb-40 wow fadeInUp" data-wow-delay="0.4s">
                  <span className="section-id blue-color">Highest Quality Care</span>
                  <h3 className="h3-md steelblue-color">Solutions to Complex Medical Problems</h3>
                  <div className="box-list">
                    <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
                  </div>
                  <div className="box-list">
                    <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                    <p>Gravida quis vehicula magna luctus tempor quisque vel laoreet turpis urna augue, viverra a augue eget dictum</p>
                  </div>
                  <div className="box-list">
                    <div className="box-list-icon"><i className="fas fa-genderless"></i></div>
                    <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="video-preview mb-40 text-center wow fadeInUp" data-wow-delay="0.6s">
                  <a className="video-popup1" href="https://www.youtube.com/embed/SZEflIVnhH8">
                    <div className="video-btn play-icon-blue">
                      <div className="video-block-wrapper">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <img className="img-fluid" alt="video-photo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS-2 */}
        <section id="reviews-2" className="bg-lightgrey wide-100 reviews-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md steelblue-color">What Our Patients Say</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel owl-theme reviews-holder">
                  {testimonials.map((testimonial, index) => (
                    <div className="review-2" key={index}>
                      <div className="review-txt text-center">
                        <div className="quote"><img alt="quote-img" /></div>
                        <div className="testimonial-avatar">
                          <img alt="testimonial-avatar" />
                        </div>
                        <p>{testimonial.text}</p>
                        <div className="review-author">
                          <h5 className="h5-sm">{testimonial.name}</h5>
                          <span>{testimonial.title}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOCTORS-1 */}
        <section id="doctors-1" className="wide-40 doctors-section division">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 section-title">
                <h3 className="h3-md steelblue-color">Our Medical Specialists</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              {doctors.map((doctor, index) => (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="doctor-1">
                    <div className="hover-overlay text-center">
                      <img className="img-fluid" alt="doctor-foto" />
                      <div className="item-overlay"></div>
                      <div className="profile-link">
                        <a className="btn btn-sm btn-tra-white black-hover" href={doctor.link}>View More Info</a>
                      </div>
                    </div>
                    <div className="doctor-meta">
                      <h5 className="h5-sm steelblue-color">{doctor.name}</h5>
                      <span className="blue-color">{doctor.specialty}</span>
                      <p className="p-sm grey-color">{doctor.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="all-doctors mb-40">
                  <a href="all-doctors.html" className="btn btn-blue blue-hover">Meet All Doctors</a>
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
                <div className="txt-block pc-30 white-color wow fadeInUp" data-wow-delay="0.4s">
                  <h4 className="h4-sm">Opening Hours:</h4>
                  <p>Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor tempus feugiat dolor lacinia cursus vitae massa</p>
                  <table className="table white-color">
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
                  <p>Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor tempus feugiat dolor lacinia undo cursus nulla massa suscipit, luctus neque purus ipsum neque dolor primis</p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-8-img text-center"></div>
        </section>

        {/* TABS-1 */}
        <section id="tabs-1" className="wide-100 tabs-section division">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="tabs-nav" className="list-group text-center">
                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item icon-xs">
                      <a className="nav-link active" id="tab1-list" data-toggle="pill" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">
                        <span className="flaticon-083-stethoscope"></span> Pediatrics
                      </a>
                    </li>
                    <li className="nav-item icon-xs">
                      <a className="nav-link" id="tab2-list" data-toggle="pill" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">
                        <span className="flaticon-005-blood-donation-3"></span> Hematology
                      </a>
                    </li>
                    <li className="nav-item icon-xs">
                      <a className="nav-link" id="tab3-list" data-toggle="pill" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">
                        <span className="flaticon-031-scanner"></span> MRI
                      </a>
                    </li>
                    <li className="nav-item icon-xs">
                      <a className="nav-link" id="tab4-list" data-toggle="pill" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">
                        <span className="flaticon-048-lungs"></span> X-Ray Diagnostics
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab1-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md steelblue-color">Pediatrics</h3>
                          <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas magna suscipit</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab2-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-imgs">
                          <img className="img-fluid" alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md steelblue-color">Hematology</h3>
                          <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas magna suscipit</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab3-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md steelblue-color">MRI Diagnostic</h3>
                          <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas magna suscipit</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <a href="service-1.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="tab4-list">
                    <div className="row d-flex align-items-center">
                      <div className="col-lg-6">
                        <div className="tab-img">
                          <img className="img-fluid" alt="tab-image" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="txt-block pc-30">
                          <h3 className="h3-md steelblue-color">X-Ray Diagnostic</h3>
                          <p className="mb-30">An enim nullam tempor sapien gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer congue magna at pretium purus pretium ligula rutrum itae laoreet augue in cubilia laoreet an augue egestas ipsum vitae emo ligula vitae arcu mollis blandit ultrice ligula egestas magna suscipit</p>
                          <div className="row">
                            <div className="col-xl-6">
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute and turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor at pretium purus blandit</p>
                              </div>
                            </div>
                            <div className="col-xl-6">
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Magna luctus tempor blandit a vitae suscipit mollis</p>
                              </div>
                              <div className="box-list m-top-15">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">Nemo ipsam egestas volute turpis dolores quaerat</p>
                              </div>
                              <div className="box-list">
                                <div className="box-list-icon blue-color"><i className="fas fa-angle-double-right"></i></div>
                                <p className="p-sm">An enim nullam tempor</p>
                              </div>
                            </div>
                          </div>
                          <a href="service-2.html" className="btn btn-blue blue-hover mt-30">View More Details</a>
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
        <div id="statistic-1" className="bg-scroll statistic-section division">
          <div className="container white-color">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.4s">
                  <span className="flaticon-062-cardiogram-3"></span>
                  <h5 className="statistic-number">9,<span className="count-element">632</span></h5>
                  <p className="txt-400">Happy Patients</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.6s">
                  <span className="flaticon-137-doctor"></span>
                  <h5 className="statistic-number"><span className="count-element">178</span></h5>
                  <p className="txt-400">Qualified Doctors</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="0.8s">
                  <span className="flaticon-065-hospital-bed"></span>
                  <h5 className="statistic-number"><span className="count-element">864</span></h5>
                  <p className="txt-400">Clinic Rooms</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="statistic-block icon-lg wow fadeInUp" data-wow-delay="1s">
                  <span className="flaticon-040-placeholder"></span>
                  <h5 className="statistic-number"><span className="count-element">473</span></h5>
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
                <h3 className="h3-md steelblue-color">Best Quality Medical Treatment</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row pricing-row">
              <div className="col-lg-4">
                <div className="pricing-table icon-xl">
                  <span className="flaticon-104-blood-sample blue-color"></span>
                  <h5 className="h5-lg">Blood Test</h5>
                  <div className="pricing-plan">
                    <sup className="steelblue-color">$</sup>
                    <span className="price steelblue-color">45</span>
                    <p className="p-md">monthly</p>
                  </div>
                  <ul className="features">
                    <li>Medical Specialties</li>
                    <li>Medical Consultation</li>
                    <li>Investigations</li>
                    <li>Medical Treatments</li>
                  </ul>
                  <a href="#" className="btn btn-md btn-tra-black blue-hover">Select Plan</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-table icon-xl">
                  <span className="flaticon-072-hospital-5 blue-color"></span>
                  <h5 className="h5-lg">Medical Care</h5>
                  <div className="pricing-plan">
                    <sup className="steelblue-color">$</sup>
                    <span className="price steelblue-color">350</span>
                    <p className="p-md">monthly</p>
                  </div>
                  <ul className="features">
                    <li>Medical Specialties</li>
                    <li>Medical Consultation</li>
                    <li>Investigations</li>
                    <li>Medical Treatments</li>
                  </ul>
                  <a href="#" className="btn btn-md btn-blue blue-hover">Select Plan</a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-table icon-xl">
                  <span className="flaticon-008-ambulance-6 blue-color"></span>
                  <h5 className="h5-lg">Emergency Care</h5>
                  <div className="pricing-plan">
                    <sup className="steelblue-color">$</sup>
                    <span className="price steelblue-color">175</span>
                    <p className="p-md">monthly</p>
                  </div>
                  <ul className="features">
                    <li>Medical Specialties</li>
                    <li>Medical Consultation</li>
                    <li>Investigations</li>
                    <li>Medical Treatments</li>
                  </ul>
                  <a href="#" className="btn btn-md btn-tra-black blue-hover">Select Plan</a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2 text-center">
                <div className="all-pricing-btn mb-40">
                  <p><span>Note!</span> Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus et ultrices posuere cubilia and curae integer congue leo metus mollis primis and mauris lectus laoreet tempor</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANNER-7 */}
        <section id="banner-7" className="bg-fixed banner-section division">
          <div className="container white-color">
            <div className="row d-flex align-items-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="banner-txt wow fadeInUp" data-wow-delay="0.4s">
                  <h2 className="h2-xs">Highest Quality Medical Treatment</h2>
                  <p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue egestas suscipit lectus mauris a lectus laoreet gestas neque undo luctus feugiat augue suscipit</p>
                  <a href="#" className="btn btn-blue tra-white-hover mt-20">Free Consultation</a>
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
                <h3 className="h3-md steelblue-color">Our Stories, Tips & Latest News</h3>
                <p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus, blandit posuere ligula varius congue cursus porta feugiat</p>
              </div>
            </div>
            <div className="row">
              {blogPosts.map((post, index) => (
                <div className="col-lg-4" key={index}>
                  <div className="blog-post wow fadeInUp" data-wow-delay={`${0.4 + index * 0.2}s`}>
                    <div className="blog-post-img">
                      <img className="img-fluid" alt="blog-post-image" />
                    </div>
                    <div className="blog-post-txt">
                      <h5 className="h5-sm steelblue-color"><a href="single-post.html">{post.title}</a></h5>
                      <span>{post.date} by <span>{post.author}</span></span>
                      <p>{post.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER-2 */}
        <section id="banner-2" className="pt-80 banner-section division">
          <div className="bg-scroll bg-inner bg-image division">
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                <div className="col-lg-5">
                  <div className="banner-2-img">
                    <img className="img-fluid" alt="banner-image" />
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1">
                  <div className="banner-txt pc-30 wow fadeInUp" data-wow-delay="0.4s">
                    <span className="section-id id-color">Modern Medicine</span>
                    <h3 className="h3-lg">Better Technologies for Better Healthcare</h3>
                    <p>Egestas magna egestas magna ipsum vitae purus ipsum primis in cubilia laoreet augue egestas suscipit lectus mauris lectus laoreet gestas neque undo luctus feugiat. Aliquam a augue suscipit</p>
                    <a href="all-doctors.html" className="btn btn-tra-white blue-hover">View Our Doctors</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER-1 */}
        <footer id="footer-1" className="wide-40 footer division">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="footer-info mb-40">
                  <img width="180" height="40" alt="footer-logo" />
                  <p className="p-sm mt-20">Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta justo at velna auctor congue</p>
                  <div className="footer-socials-links mt-20">
                    <ul className="foo-socials text-center clearfix">
                      <li><a href="#" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#" className="ico-twitter"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#" className="ico-google-plus"><i className="fab fa-google-plus-g"></i></a></li>
                      <li><a href="#" className="ico-tumblr"><i className="fab fa-tumblr"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-box mb-40">
                  <h5 className="h5-xs">Our Location</h5>
                  <p>121 King Street, Melbourne,</p>
                  <p>Victoria 3000 Australia</p>
                  <p className="foo-email mt-20">E: <a href="mailto:yourdomain@mail.com">hello@yourdomain.com</a></p>
                  <p>P: +12 9 8765 4321</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-box mb-40">
                  <h5 className="h5-xs">Working Time</h5>
                  <p className="p-sm">Mon - Wed - <span>9:00 AM - 7:00 PM</span></p>
                  <p className="p-sm">Thursday - <span>9:00 AM - 6:30 PM</span></p>
                  <p className="p-sm">Friday - <span>9:00 AM - 6:00 PM</span></p>
                  <p className="p-sm">Sat - Sun - <span>Closed</span></p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-box mb-40">
                  <h5 className="h5-xs">Emergency Cases</h5>
                  <h5 className="h5-xl blue-color">1-800-123-4560</h5>
                  <p className="p-sm mt-15">Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta justo velna aucto magna</p>
                </div>
              </div>
            </div>
            <div className="bottom-footer">
              <div className="row">
                <div className="col-md-12">
                  <p className="footer-copyright">© 2019 <span>Home</span>. All Rights Reserved</p>
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