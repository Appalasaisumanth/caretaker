let connection =require('../connection');

function populate_appointments(req,res,next)
{   try{
    connection.query('SELECT COUNT(*) as count FROM appointment',(err,result)=>
    {
        if (err)
        {
            console.log(err);
            return res.status(500).json({message:'error in retriving data'});

        }
        else
        {
            if (result[0].count===0)
            {
                const appointment_time=['10:00:00','11:00:00','12:00:00','16:00:00','17:00:00','18:00:00'];
                const value=[];
                for (let i=0;i<6;i++)
                {
                    value.push(`(${i+1},${i+1},'${appointment_time[i]}',(CURRENT_appointment_DATE + INTERVAL ${1+i%2} DAY))`)
                }
                const query =`INSERT INTO appointment (pid,did,appointment_time,appointment_date) values ${value.join(',')};`
                connection.query(query,(err,result)=>{
                    if (err)
                    {
                        console.log(err);
                        return res.status(500).json({message:'error in retriving data'});
                    }
                    return res.status(200).json({message:'sucessfully populated'});

                })

            }
            else
            {
                return res.status(400).json({message:'already apointemnets exists',count:result[0].count});
            }
        }
    })
}
catch(err)
{
    console.log(err);
    return res.status(500).json({message:'internal server error'});
}
    
}
function get_appointment(req,res,next)
{ const {pid,did,appointment_date,appointment_time}=req.body;
  let values=[];
  let filters=[];
  if (pid)
  {
    filters.push('pid=?');
    values.push(pid);
  }
  if (did)
    {
      filters.push('did=?');
      values.push(did);
    }
    if (appointment_date)
        {
          filters.push('appointment_date=?');
          values.push(appointment_date);
        }
        if (appointment_time)
            {
              filters.push('appointment_time=?');
              values.push(appointment_time);
            }
            if (filters.length===0)
            {
                filters.push('1 OR 1')
            }
    try {

        connection.query(
            `SELECT 
      appointment_date,
      appointment_time,
      doctor.name AS dname,
      patient.name AS pname,
      doctor.qualification,
      doctor.experience,
      doctor.department
   FROM appointment
   INNER JOIN doctor ON doctor.id = appointment.did
   INNER JOIN patient ON patient.id = appointment.pid
   WHERE ${filters.join(' AND ')};`,
            
            values, async (err2, result2) => {
            if (err2) 
                {
                console.error("Error fetching details:", err2);
                return res.status(500).json({ error: "Failed to fetch deos" });
            } 
            if (result2.length > 0) {
                return res.status(200).json({ message: "all appointments  list", appointments: result2 });
            }
            else
            {
                return res.status(200).json({ message: "appointment's not exist " });
            }
        });
    }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({message:'internal server error,try next appointment_time'})
        }
}
function get_slots(req,res,next)
{ const {pid,did,appointment_date,appointment_time}=req.body;
  let values=[];
  let filters=[];
  if (pid)
  {
    filters.push('pid=?');
    values.push(pid);
  }
  if (did)
    {
      filters.push('did=?');
      values.push(did);
    }
    if (appointment_date)
        {
          filters.push('appointment_date=?');
          values.push(appointment_date);
        }
        if (appointment_time)
            {
              filters.push('appointment_time=?');
              values.push(appointment_time);
            }
            if (filters.length===0)
            {
                filters.push('1 OR 1')
            }
    try {

        connection.query(
            `SELECT 
      appointment_date,
      appointment_time,
      doctor.name AS dname,
      patient.name AS pname,
      doctor.qualification,
      doctor.experience,
      doctor.department
   FROM appointment
   INNER JOIN doctor ON doctor.id = appointment.did
   INNER JOIN patient ON patient.id = appointment.pid
   WHERE ${filters.join(' AND ')};`,
            
            values, async (err2, result2) => {
            if (err2) 
                {
                console.error("Error fetching details:", err2);
                return res.status(500).json({ error: "Failed to fetch deos" });
            } 
            if (result2.length > 0) {
                return res.status(200).json({ message: "all appointments  list", appointments: result2 });
            }
            else
            {
                return res.status(200).json({ message: "appointment's not exist " });
            }
        });
    }
        catch(err)
        {
            console.log(err);
            return res.status(500).json({message:'internal server error,try next appointment_time'})
        }
}



module.exports={populate_appointments,get_appointment,get_slots};