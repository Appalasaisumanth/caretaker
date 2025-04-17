import React from 'react';
import styled from 'styled-components';
import { FaTemperatureHigh, FaPills, FaUserMd } from 'react-icons/fa';

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CardWrapper = styled.div`
  width: 50%;
  max-width: 50%;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardContent = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const CardField = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
`;

const Label = styled.span`
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
`;

const Value = styled.span`
  color: #666;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

const Status = styled.span`
  color: #dc3545;
  font-weight: 600;
`;

const Stat = styled.span`
  color: rgb(11, 167, 14);
  font-weight: 600;
`;

const AppointmentsCard = ({ appointments, handleViewTest, handleViewTreatment, handleViewDoctor }) => {
  const currentDate = new Date(Date.now());

  return (
    <>
      <Title>Your Appointments</Title>
      {appointments.length === 0 ? (
        <Description>No appointments scheduled.</Description>
      ) : (
        <CardsContainer>
          {appointments.map((appointment) => {
            const appointmentDate = new Date(appointment.appointment_date);
            const isDone = appointmentDate < currentDate;

            return (
              <CardWrapper key={appointment.aid}>
                <CardContent>
                  <CardField>
                    <Label>Date:</Label>
                    <Value>{appointment.appointment_date}</Value>
                  </CardField>
                  <CardField>
                    <Label>Time:</Label>
                    <Value>{appointment.appointment_time}</Value>
                  </CardField>
                  <CardField>
                    <Label>Doctor:</Label>
                    <Value>{appointment.dname}</Value>
                  </CardField>
                  <CardField>
                    <Label>Patient:</Label>
                    <Value>{appointment.pname}</Value>
                  </CardField>
                  <CardField>
                    <Label>Reason:</Label>
                    <Value>{appointment.appointment_details}</Value>
                  </CardField>
                  <CardField>
                    <Label>Remarks:</Label>
                    <Value>{appointment.remarks || 'N/A'}</Value>
                  </CardField>
                  <CardField>
                    <Label>Status:</Label>
                    {isDone ? <Status>Done</Status> : <Stat>Booked</Stat>}
                  </CardField>
                </CardContent>
                <ActionButtons>
                  <ActionButton
                    color="#007bff"
                    hoverColor="#0056b3"
                    onClick={() => handleViewTest(appointment.aid)}
                    title="View Tests"
                  >
                    <FaTemperatureHigh />
                  </ActionButton>
                  <ActionButton
                    color="#007bff"
                    hoverColor="#0056b3"
                    onClick={() => handleViewTreatment(appointment.aid)}
                    title="View Treatments"
                  >
                    <FaPills />
                  </ActionButton>
                  <ActionButton
                    color="#007bff"
                    hoverColor="#0056b3"
                    onClick={() => handleViewDoctor(appointment)}
                    title="View Doctor Details"
                  >
                    <FaUserMd />
                  </ActionButton>
                </ActionButtons>
              </CardWrapper>
            );
          })}
        </CardsContainer>
      )}
    </>
  );
};

export default AppointmentsCard;