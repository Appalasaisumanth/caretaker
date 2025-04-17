import { React, useState, useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEdit, FaTrash, FaUserMd, FaHospital } from 'react-icons/fa';
import Header from './HeaderFdo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AvailableRoomRoute,ilableRoomRoute,DischargeRoomRoute, FilledRoomRoute} from '../APIRoutes/APIRoutes';

// Styled components (unchanged, included for completeness)
const Container = styled.div`
  width: 100%;
  font-family: 'Poppins', sans-serif;
  padding: 5rem 20px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 3rem 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #005bb5;
  margin: 0;
`;

const AddButton = styled(Link)`
  background: #007bff;
  color: white;
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0056b3;
    transform: translateY(-2px);
    color: white;
  }
`;

const TableWrapper = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #007bff;
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  font-size: 1rem;
  color: #333;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.9rem;
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.color || '#007bff'};
  font-size: 1.2rem;
  cursor: pointer;
  margin-right: 1rem;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.hoverColor || '#0056b3'};
  }
`;

// Modal styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const ModalHeader = styled.h2`
  font-size: 1.8rem;
  color: #005bb5;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
const Select = styled.select`
  width: 100%;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  outline: none;
  background: #fff;
  color: #333;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.25);
  }
`;

const Button = styled.button`
  background: ${props => (props.cancel ? '#dc3545' : '#007bff')};
  color: white;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s ease;
  &:hover {
    background: ${props => (props.cancel ? '#c82333' : '#005bb5')};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const FdoDischarge = () => {
    const [doctors, setDoctors] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      department: '',
      qualification: '',
      experience: 0,
      role: '',
    });
    const modalRef = useRef(null);
 

  const handleUpdate = (doctor) => {
    setSelectedDoctor(doctor);
    setFormData({
     
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
    setFormData({
      
      username: '',
      department: '',
      qualification: '',
      experience: 0,
      role: '',
    });
  };

    const handleOk = async (e) => {
      e.preventDefault();
      console.log('Updating doctor:', formData);
     
      
    
      try {
        const response = await fetch(DischargeRoomRoute , {
          method: 'POST',
          body:JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) 
        {
          const data = await response.json();
          console.log(data);
          alert(data.message)

        } else {
          const data = await response.json();
          alert(data.message);
        }



      }
      catch (err) 
      {
        console.log(err);
        alert('Something went wrong. Please try again.');
      }
    
      
      setIsModalOpen(false);
      setSelectedDoctor(null);
    };

  

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: name === 'experience' ? parseInt(value) || 0 : value,
        }));
      };
    
  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalOpen]);




    // Fetch doctors from API
    useEffect(() => {

      const get_doctors = async () => {
        try {
          const response = await fetch(FilledRoomRoute, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();

            setDoctors(data.rooms);
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
    }, [handleOk]);


    return (
      <>
        <Header />
        <Container>
          <ContentContainer>
            <HeaderSection>
              <Title>Manage Rooms</Title>
              
            </HeaderSection>
            {(doctors.length === 0) ? (<div> sorry no doctors's registed</div>) : (<TableWrapper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>Room no</TableHeader>
                    <TableHeader>Room details</TableHeader>
                    <TableHeader>patient id</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {doctors.map((doctor) => (
                    <TableRow key={doctor.id}>
                      <TableCell>{doctor.id}</TableCell>
                      <TableCell>{doctor.details}</TableCell>
                      <TableCell>{doctor.pid}</TableCell>
                      <TableCell>
                        <ActionButton
                          color="#ed8936"
                          hoverColor="#dd6b20"
                          onClick={() => handleUpdate(doctor)}
                          title="Delete"
                        >
                          <FaHospital />
                        </ActionButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableWrapper>)}


            
          {/* Modal for updating doctor */}
          {isModalOpen && (
            <ModalOverlay>
              <ModalContent tabIndex={-1} ref={modalRef}>
                <ModalHeader>Update Doctor</ModalHeader>
                <Form onSubmit={handleOk}>
                <label for='name'> name</label>
                  <Input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Doctor Name"
                    disabled
                  />
                   <label for='experience'> experience</label>
                  <Input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Experience (years)"
                    required
                  />
                 
                  <ButtonGroup>
                    <Button type="button" cancel onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button type="submit">OK</Button>
                  </ButtonGroup>
                </Form>
              </ModalContent>
            </ModalOverlay>
          )}

          </ContentContainer>
          <ToastContainer /> {/* Added ToastContainer */}
        </Container>
      </>
    );
  };
export default FdoDischarge;
