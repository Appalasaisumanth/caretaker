import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img3 from '../images/imgg3.jpg';
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

// Styled Components
const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
`;

const Header = styled.header`
  background: linear-gradient(135deg, #007bff, #005bb5);
  color: white;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.h4`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: color 0.3s;
  &:hover {
    color: #e0e0e0;
  }
`;

const Button = styled.a`
  background: #ffffff;
  color: #007bff;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  background: ${props => props.bg || 'white'};
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  flex: 1;
  min-width: 300px;
`;

const HeroTitle = styled.h1`
  color: #005bb5;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HeroImage = styled(motion.img)`
  max-width: 100%;
  border-radius: 15px;
  flex: 1;
  min-width: 300px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: #005bb5;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const ServiceIcon = styled.i`
  font-size: 3.5rem;
  color: #007bff;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h5`
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const DoctorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const DoctorCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

const DoctorImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  object-fit: cover;
`;

const DoctorName = styled.h5`
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DoctorSpecialty = styled.p`
  color: #007bff;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

const DoctorDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
`;

const CenteredButton = styled(Button)`
  display: block;
  margin: 3rem auto;
  padding: 0.75rem 2rem;
`;

const AppointmentRow = styled(HeroRow)`
  gap: 3rem;
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2.5rem;
  text-align: center;
`;

const ContactItem = styled.div`
  color: white;
`;

const ContactIcon = styled.i`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #e0e0e0;
`;

const ContactText = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 400;
`;

const Footer = styled.footer`
  background: linear-gradient(135deg, #343a40, #2c3238);
  color: white;
  padding: 3rem 0;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #007bff;
  }
`;

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  return (
    <Container>
      {/* HEADER */}
      <Header>
        <HeaderContainer>
          <Logo>CarePlus Hospital</Logo>
          <Nav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#doctors">Doctors</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <Button href="/appointment">Book Appointment</Button>
          </Nav>
        </HeaderContainer>
      </Header>

      {/* HERO SECTION */}
      <Section id="hero" bg="linear-gradient(135deg, #f8f9fa, #e9ecef)">
        <SectionContainer>
          <HeroRow>
            <HeroText
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <HeroTitle>Your Health, Our Priority</HeroTitle>
              <HeroDescription>
                Providing compassionate and advanced medical care to keep you and your loved ones healthy.
              </HeroDescription>
              <Button href="/about">Learn More</Button>
            </HeroText>
            <HeroImage
              src={img3}
              alt="Hospital"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </HeroRow>
        </SectionContainer>
      </Section>

      {/* SERVICES SECTION */}
      <Section id="services">
        <SectionContainer>
          <SectionTitle
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Our Services
          </SectionTitle>
          <ServicesGrid
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={fadeIn}
              >
                <ServiceIcon className={service.icon} />
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </SectionContainer>
      </Section>

      {/* DOCTORS SECTION */}
      <Section id="doctors" bg="linear-gradient(135deg, #f8f9fa, #e9ecef)">
        <SectionContainer>
          <SectionTitle
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Meet Our Doctors
          </SectionTitle>
          <DoctorsGrid
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {doctors.map((doctor, index) => (
              <DoctorCard
                key={index}
                variants={fadeIn}
              >
                <DoctorImage src="https://via.placeholder.com/150" alt="Doctor" />
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
                <DoctorDescription>{doctor.description}</DoctorDescription>
              </DoctorCard>
            ))}
          </DoctorsGrid>
          <CenteredButton href="/doctors">View All Doctors</CenteredButton>
        </SectionContainer>
      </Section>

      {/* APPOINTMENT SECTION */}
      <Section id="appointment">
        <SectionContainer>
          <AppointmentRow>
            <HeroText
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <HeroTitle>Book an Appointment</HeroTitle>
              <HeroDescription>
                Schedule a visit with our specialists at your convenience. We’re here to provide the care you need, when you need it.
              </HeroDescription>
              <Button href="/appointment">Make Appointment</Button>
            </HeroText>
            <HeroImage
              src="https://via.placeholder.com/400x300"
              alt="Appointment"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </AppointmentRow>
        </SectionContainer>
      </Section>

      {/* CONTACT SECTION */}
      <Section id="contact" bg="linear-gradient(135deg, #007bff, #005bb5)">
        <SectionContainer>
          <SectionTitle
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            style={{ color: 'white' }}
          >
            Get in Touch
          </SectionTitle>
          <ContactGrid
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <ContactItem as={motion.div} variants={fadeIn}>
              <ContactIcon className="fas fa-map-marker-alt" />
              <ContactText>123 Health St, Wellness City, 12345</ContactText>
            </ContactItem>
            <ContactItem as={motion.div} variants={fadeIn}>
              <ContactIcon className="fas fa-phone" />
              <ContactText>(800) 123-4567</ContactText>
            </ContactItem>
            <ContactItem as={motion.div} variants={fadeIn}>
              <ContactIcon className="fas fa-envelope" />
              <ContactText>contact@careplus.com</ContactText>
            </ContactItem>
          </ContactGrid>
        </SectionContainer>
      </Section>

      {/* FOOTER */}
      <Footer>
        <FooterContainer>
          <FooterText>© 2025 CarePlus Hospital. All Rights Reserved.</FooterText>
          <SocialLinks>
            <SocialLink href="#"><i className="fab fa-facebook-f"></i></SocialLink>
            <SocialLink href="#"><i className="fab fa-twitter"></i></SocialLink>
            <SocialLink href="#"><i className="fab fa-linkedin-in"></i></SocialLink>
          </SocialLinks>
        </FooterContainer>
      </Footer>
    </Container>
  );
};

export default Home;