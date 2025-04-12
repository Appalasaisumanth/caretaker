import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Sample data for dynamic sections
const services = [
  { icon: 'fas fa-stethoscope', title: 'General Medicine', description: 'Comprehensive care for all ages with a focus on prevention and treatment.' },
  { icon: 'fas fa-heartbeat', title: 'Cardiology', description: 'Advanced heart care services with state-of-the-art diagnostics.' },
  { icon: 'fas fa-x-ray', title: 'Radiology', description: 'High-quality imaging services for accurate diagnosis.' },
  { icon: 'fas fa-ambulance', title: 'Emergency Care', description: '24/7 emergency services with rapid response teams.' },
];

const doctors = [
  { name: 'Dr. Emily Carter', specialty: 'General Physician', description: 'Experienced in family medicine with a patient-first approach.' },
  { name: 'Dr. Michael Lee', specialty: 'Cardiologist', description: 'Specialist in heart health with over 15 years of experience.' },
  { name: 'Dr. Sarah Patel', specialty: 'Radiologist', description: 'Expert in diagnostic imaging and patient care.' },
];

const Home = () => {
  return (
    <div className="container-fluid p-0">
      {/* HEADER */}
      <header className="bg-primary text-white">
        <div className="container">
          <div className="row align-items-center py-3">
            <div className="col-md-3">
              <h4 className="m-0">CarePlus Hospital</h4>
            </div>
            <div className="col-md-9">
              <nav className="d-flex justify-content-end">
                <a href="#home" className="text-white mx-3">Home</a>
                <a href="#services" className="text-white mx-3">Services</a>
                <a href="#doctors" className="text-white mx-3">Doctors</a>
                <a href="#contact" className="text-white mx-3">Contact</a>
                <a href="/appointment" className="btn btn-light btn-sm ms-3">Book Appointment</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="text-primary">Your Health, Our Priority</h1>
              <p className="lead">Providing compassionate and advanced medical care to keep you and your loved ones healthy.</p>
              <a href="/about" className="btn btn-primary">Learn More</a>
            </div>
            <div className="col-md-6 text-center">
              <img src="https://via.placeholder.com/400x300" alt="Hospital" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-4">Our Services</h2>
          <div className="row">
            {services.map((service, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card text-center h-100">
                  <div className="card-body">
                    <i className={`${service.icon} fa-3x text-primary mb-3`}></i>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS SECTION */}
      <section id="doctors" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center text-primary mb-4">Meet Our Doctors</h2>
          <div className="row">
            {doctors.map((doctor, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src="https://via.placeholder.com/150" alt="Doctor" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: '100px', height: '100px' }} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{doctor.name}</h5>
                    <p className="text-primary">{doctor.specialty}</p>
                    <p className="card-text">{doctor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <a href="/doctors" className="btn btn-primary">View All Doctors</a>
          </div>
        </div>
      </section>

      {/* APPOINTMENT SECTION */}
      <section id="appointment" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="text-primary">Book an Appointment</h2>
              <p>Schedule a visit with our specialists at your convenience. We’re here to provide the care you need, when you need it.</p>
              <a href="/appointment" className="btn btn-primary">Make Appointment</a>
            </div>
            <div className="col-md-6 text-center">
              <img src="https://via.placeholder.com/400x300" alt="Appointment" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-primary text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">Get in Touch</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fas fa-map-marker-alt fa-2x mb-3"></i>
              <p>123 Health St, Wellness City, 12345</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-phone fa-2x mb-3"></i>
              <p>(800) 123-4567</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-envelope fa-2x mb-3"></i>
              <p>contact@careplus.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; 2025 CarePlus Hospital. All Rights Reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;