import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './HeaderDoctor';
import { FaHistory, FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GetPrevAppointments, GetTestsRoute, GetTreatmentsRoute } from '../APIRoutes/APIRoutes';

// Styled components (aligned with PatientHome.jsx)
const Container = styled.div`
  padding: 5rem 20px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    padding: 3rem 20px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #005bb5;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 2rem;
  text-align: center;
`;

const DoctorPrevAppointments = () => {
  const [user, setUser] = useState('');
  const [did, setDid] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  // Fetch user and appointments
  useEffect(() => {
    // Set user from localStorage
    let userData = localStorage.getItem('user') || 'Fdo+0+doctor';
    const [username, id, role] = userData.split('+');
    setUser(username);
    setDid(id || 0);

    // Fetch previous appointments
    const getAppointments = async () => {
      try {
        const response = await fetch(`${GetPrevAppointments}/${did}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.message === 'doctor') {
            setAppointments(data.doctors || []);
          } else {
            toast.warn(data.message || 'No previous appointments found');
            setAppointments([]);
          }
        } else {
          const data = await response.json();
          toast.error(data.message || 'Failed to fetch appointments');
        }
      } catch (err) {
        console.error(err);
        toast.error('Something went wrong. Please try again.');
      }
    };

    if (id) {
      getAppointments();
    }
  }, []);

  // Handle view tests
  const handleViewTest = async (appointment_id) => {
    try {
      const testsResponse = await fetch(`${GetTestsRoute}/${appointment_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const testsData = await testsResponse.json();
      const tests = testsResponse.ok ? testsData.tests || [] : [];

      toast.info(
        <div>
          {tests.length > 0 ? (
            <ul>
              {tests.map((test, index) => (
                <li key={index}>{test.details}</li>
              ))}
            </ul>
          ) : (
            <p>No tests assigned</p>
          )}
        </div>,
        {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
        }
      );
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch tests');
    }
  };

  // Handle view treatments
  const handleViewTreatment = async (appointment_id) => {
    try {
      const treatmentsResponse = await fetch(`${GetTreatmentsRoute}/${appointment_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      const treatmentsData = await treatmentsResponse.json();
      const treatments = treatmentsResponse.ok ? treatmentsData.treatments || [] : [];

      toast.info(
        <div>
          {treatments.length > 0 ? (
            <ul>
              {treatments.map((treatment, index) => (
                <li key={index}>{treatment.details}</li>
              ))}
            </ul>
          ) : (
            <p>No treatments assigned</p>
          )}
        </div>,
        {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
        }
      );
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch treatments');
    }
  };

  // Handle view patient
  const handleViewPatient = async (appointment) => {
    toast.info(
      <div>
        <strong>Patient Details</strong>
        <p>Patient ID: {appointment.pid}</p>
        <p>Details: {appointment.details}</p>
        <p>Remarks: {appointment.remarks}</p>
      </div>,
      {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      }
    );
  };

  // Handle card click to redirect
  const handleCardClick = (appointment_id) => {
    navigate(`/doctorh/prevapo/${appointment_id}`);
  };

  return (
    <>
      <Header />
      <Container>
        <ContentContainer>
          <Title>Welcome, {user || 'Doctor'}</Title>
          <Description>Your Previous Appointments</Description>
          <AppointmentsCard
            id="#prev-appointments"
            appointments={appointments}
            handleViewTest={handleViewTest}
            handleViewTreatment={handleViewTreatment}
            handleViewPatient={handleViewPatient}
            handleCardClick={handleCardClick}
          />
        </ContentContainer>
        <ToastContainer />
      </Container>
    </>
  );
};

export default DoctorPrevAppointments;