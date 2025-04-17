import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaEye, FaEdit, FaTrash, FaUserMd, FaHospital } from 'react-icons/fa';
import Header from './HeaderFdo';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdmitRoomRoute, AvailableRoomRoute} from '../APIRoutes/APIRoutes';

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

const FdoAllocate = () => {
  const [deo, setdeo] = useState([]);
  const [formData,setFormData]=useState({id:0,pid:0})
  const handleAllocate = async () => {
   

      try {
        const response = await fetch(AdmitRoomRoute, {
          method: 'POST',
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
    }
  



    





    // Fetch deo from API
    useEffect(() => {

      const get_deo = async () => {
        try {
          const response = await fetch(AvailableRoomRoute, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();

            setdeo(data.rooms);
          } else {
            const data = await response.json();
            alert(data.message || 'Getting deo failed');
          }
        } catch (err) {
          console.log(err);
          alert('Something went wrong. Please try again.');
        }
      };
      get_deo();
    }, [handleAllocate]);


    return (
      <>
        <Header />
        <Container>
          <ContentContainer>
            <HeaderSection>
              <Title>Manage Rooms</Title>
              
            </HeaderSection>
            {(deo.length === 0) ? (<div> sorry no deo's registed</div>) : (<TableWrapper>
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
                  {deo.map((Deo) => (
                    <TableRow key={Deo.id}>
                      <TableCell>{Deo.id}</TableCell>
                      <TableCell>{Deo.details}</TableCell>
                      <TableCell>{Deo.pid}</TableCell>
                      <TableCell>
                        <ActionButton
                          color="#ed8936"
                          hoverColor="#dd6b20"
                          onClick={() => handleAllocate(Deo.id)}
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

          </ContentContainer>
          <ToastContainer /> {/* Added ToastContainer */}
        </Container>
      </>
    );
  };
export default FdoAllocate;
