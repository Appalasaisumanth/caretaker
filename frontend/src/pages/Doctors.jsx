import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { GetDoctorsRoute } from '../APIRoutes/APIRoutes';

// Styled Components
const Container = styled.div`
  width: 100%;
  height:80%;
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

const ClearFiltersButton = styled.button`
  background: #007bff;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
  margin-top: 1rem;
  width: 100%;
  text-align: center;

  &:hover {
    background: #005bb5;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  padding: 0 5px 0 0;
  display: flex;
 
  margin-left: ${props => (props.showFilters ? '400px' : '0')}; /* Offset for fixed sidebar */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
    margin-left: 0; /* No offset on mobile */
  }
`;

const FilterSidebar = styled(motion.div)`
  width: 250px;
  flex-shrink: 0;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 900;
  padding: 1.5rem;
  border-radius: 0 10px 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-left: 0;
  margin-top: 6rem;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: static;
    border-radius: 10px;
    margin-top: 0;
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FilterTitle = styled.h3`
  font-size: 1.2rem;
  color: #005bb5;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const DoctorsFlex = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: flex-start;
  height:400px;
`;


const DoctorCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 1.2rem;
  transition: transform 0.3s ease;
  

  &:hover {
    transform: translateY(-8px);
  }


`;


const DoctorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  object-fit: cover;
`;

const DoctorName = styled.h5`
  font-size: 1.4rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const DoctorSpecialty = styled.p`
  color: #007bff;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

const DoctorExperience = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.3rem;
`;

const DoctorDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 0;
`;

const NoDoctorsMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
  width: 100%;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#333')};
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #007bff;
    color: #fff;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: #005bb5;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  height:10px;
`;

const FilterToggleButton = styled.button`
  background: #007bff;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background: #005bb5;
    transform: translateY(-2px);
  }

  @media (min-width: 769px) {
    display: none; /* Hide on desktop */
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

const sidebarVariants = {
  hidden: { x: -250, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { x: -250, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
};

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(true);

  // Adjust doctors per page based on filter visibility
  const doctorsPerPage = showFilters ? 3 : 4;

  // Fetch doctors from API
  useEffect(() => {
    const get_doctors = async () => {
      try {
        const response = await fetch(GetDoctorsRoute, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setDoctors(data.doctors);
          setFilteredDoctors(data.doctors);
        } else {
          const data = await response.json();
          alert(data.message || 'Getting doctors failed');
        }
      } catch (err) {
        console.log(err);
        alert('Something went wrong. Please try again.');
      }
    };
    get_doctors();
  }, []);

  // Get unique departments
  const departments = [...new Set(doctors.map(doctor => doctor.department || 'Dentist'))];

  // Experience filter options
  const experienceOptions = [
    { label: '< 5 years', value: '0-5' },
    { label: '5-10 years', value: '5-10' },
    { label: '> 10 years', value: '10+' },
  ];

  // Handle department checkbox changes
  const handleDepartmentChange = (dept) => {
    setSelectedDepartments(prev =>
      prev.includes(dept) ? prev.filter(d => d !== dept) : [...prev, dept]
    );
    setCurrentPage(1);
  };

  // Handle experience checkbox changes
  const handleExperienceChange = (exp) => {
    setSelectedExperience(prev =>
      prev.includes(exp) ? prev.filter(e => e !== exp) : [...prev, exp]
    );
    setCurrentPage(1);
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedDepartments([]);
    setSelectedExperience([]);
    setCurrentPage(1);
  };

  // Apply filters
  useEffect(() => {
    let result = [...doctors];

    if (selectedDepartments.length > 0) {
      result = result.filter(doctor =>
        selectedDepartments.includes(doctor.department || 'Dentist')
      );
    }

    if (selectedExperience.length > 0) {
      result = result.filter(doctor => {
        const exp = parseInt(doctor.experience || 0);
        return selectedExperience.some(range => {
          if (range === '0-5') return exp < 5;
          if (range === '5-10') return exp >= 5 && exp <= 10;
          if (range === '10+') return exp > 10;
          return false;
        });
      });
    }

    setFilteredDoctors(result);
    setCurrentPage(1);
  }, [selectedDepartments, selectedExperience, doctors]);

  // Pagination logic
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

      {/* DOCTORS SECTION */}
      <Section id="doctors">
        <SectionContainer showFilters={showFilters}>
          <AnimatePresence>
            {showFilters && (
              <FilterSidebar
                variants={sidebarVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <FilterGroup>
                  <FilterTitle>Departments</FilterTitle>
                  {departments.map((dept, index) => (
                    <CheckboxLabel key={index}>
                      <Checkbox
                        type="checkbox"
                        checked={selectedDepartments.includes(dept)}
                        onChange={() => handleDepartmentChange(dept)}
                      />
                      {dept}
                    </CheckboxLabel>
                  ))}
                </FilterGroup>
                <FilterGroup>
                  <FilterTitle>Experience</FilterTitle>
                  {experienceOptions.map((option, index) => (
                    <CheckboxLabel key={index}>
                      <Checkbox
                        type="checkbox"
                        checked={selectedExperience.includes(option.value)}
                        onChange={() => handleExperienceChange(option.value)}
                      />
                      {option.label}
                    </CheckboxLabel>
                  ))}
                </FilterGroup>
                <ClearFiltersButton onClick={clearFilters}>
                  Clear Filters
                </ClearFiltersButton>
              </FilterSidebar>
            )}
          </AnimatePresence>
          <div>
            <FilterToggleButton onClick={() => setShowFilters(!showFilters)}>
              <i className="fas fa-filter"></i>
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </FilterToggleButton>
            <SectionTitle initial="hidden" animate="visible" variants={fadeIn}>
              Our Doctors
            </SectionTitle>
            <DoctorsFlex as={motion.div} initial="hidden" animate="visible" variants={stagger}>
              {currentDoctors.length > 0 ? (
                currentDoctors.map((doctor, index) => (
                  <DoctorCard key={index} variants={fadeIn}>
                    <DoctorImage
                      src="https://as1.ftcdn.net/v2/jpg/06/48/69/42/1000_F_648694278_haC94bdL26EedqLMIbMpLACqzxwuvq4f.webp"
                      alt="Doctor"
                    />
                    <DoctorName>{doctor.name}</DoctorName>
                    <DoctorSpecialty>{doctor.department || 'Dentist'}</DoctorSpecialty>
                    <DoctorExperience>
                      {doctor.experience || '5'} Years Experience
                    </DoctorExperience>
                    <DoctorDescription>{doctor.qualification || 'MBBS MD'}</DoctorDescription>
                  </DoctorCard>
                ))
              ) : (
                <NoDoctorsMessage>No doctors match your filters.</NoDoctorsMessage>
              )}
            </DoctorsFlex>
            {totalPages > 1 && (
              <PaginationContainer>
                <PaginationButton
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </PaginationButton>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
                  <PaginationButton
                    key={page}
                    onClick={() => handlePageChange(page)}
                    active={currentPage === page}
                  >
                    {page}
                  </PaginationButton>
                ))}
                <PaginationButton
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </PaginationButton>
              </PaginationContainer>
            )}
          </div>
        </SectionContainer>
      </Section>
    </Container>
  );
};

export default Doctors;