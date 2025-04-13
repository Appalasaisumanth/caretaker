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

function get_slots(req,res,next)
{
    const {did}=req.params;
    if(!did)
    {
        return res.status(500).json({message:'doctor id is null,put something '});

    }
    let slots=[]
    const time=['10:00:00','11:00:00','12:00:00','16:00:00','17:00:00','18:00:00'];
    const matrix=[];
    const today=new Date();
    for(i=1;i<=7;i++)
    {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
    
        const formattedDate = date.toISOString().split("T")[0];
        time.forEach(time => {
            matrix.push({ date: formattedDate, time });
          });

    }
    try{
    connection.query("SELECT appointment_date as date,appointment_time as time  from appointment where did=?;",[did],(err,result)=>{
        if(err)
        {
            console.log(err);
            return res.status(500).json({message:'error retriving data,try some other time'});
        }
        else
        {
            new_slots=matrix.filter((x)=>{return  !result.some(r=> r.date===x.date && r.time===x.time)});
           
            if (new_slots.length>0)
            {return res.status(200).json({message:'these are slots',slots:new_slots,length:new_slots.length});}
            else
            {
                return res.status(200).json({message:'slots are not avialable'});
            }
        }
    })}
    catch(err)
    {
        console.log(err);

    return res.status(500).json({message:'Internal server error'});
    }
}
function book_appointment(req,res,next)
{
    const {did,appointment_time,appointment_date,pid}=req.body;
    if(!did || !appointment_date|| !appointment_time || !pid)
    {
        return res.status(500).json({message:'all feilds must be filled,some feilds are missing'});

    }
    try{
    connection.query("SELECT *   from appointment where did=? AND pid=? AND appointment_time=? AND appointment_date=?;",[did,pid,appointment_time,appointment_date],(err,result)=>{
        if(err)
        {
            console.log(err);
            return res.status(500).json({message:'error retriving data,try some other time'});
        }
        else
        {
            if (result.length>0)
            {return res.status(200).json({message:'this slot is booked try another slot',});}
            else
            {
                connection.query(`INSERT INTO appointment (pid,did,appointment_date,appointment_time) values (${pid},${did},'${appointment_date}','${appointment_time}');`,(err,result)=>
                {
                    if(err)
                        {
                            console.log(err);
                            return res.status(500).json({message:'error retriving data,try some other time'});
                        }
                        else
                        {
                            return res.status(200).json({message:'sucessful appointment created'});
                        }
                })
            }
        }
    })}
    catch(err)
    {
        console.log(err);

    return res.status(500).json({message:'Internal server error'});
    }
}
function delete_appointment(req,res,next)
{
    const {did,appointment_time,appointment_date,pid}=req.body;
    if(!did || !appointment_date|| !appointment_time || !pid)
    {
        return res.status(500).json({message:'all feilds must be filled,some feilds are missing'});

    }
    try{
    connection.query("SELECT *   from appointment where did=? AND pid=? AND appointment_time=? AND appointment_date=?;",[did,pid,appointment_time,appointment_date],(err,result)=>{
        if(err)
        {
            console.log(err);
            return res.status(500).json({message:'error retriving data,try some other time'});
        }
        else
        {
            if (result.length==0)
            {return res.status(200).json({message:'this slot is not booked cannot be deleted',});}
            else
            {
                connection.query(`DELETE FROM appointment where did=? AND pid=? AND appointment_time=? AND appointment_date=?;`,[did,pid,appointment_time,appointment_date],(err,result)=>
                {
                    if(err)
                        {
                            console.log(err);
                            return res.status(500).json({message:'error retriving data,try some other time'});
                        }
                        else
                        {
                            return res.status(200).json({message:'appointment deleted successfully'});
                        }
                })
            }
        }
    })}
    catch(err)
    {
        console.log(err);

    return res.status(500).json({message:'Internal server error'});
    }
}

function update_appointment(req,res,next)
{
    const {aid,pid,did,appointment_time,appointment_date,}=req.body;
    if(!did || !appointment_date|| !appointment_time || !pid ||!aid)
    {
        return res.status(500).json({message:'all feilds must be filled,some feilds are missing'});

    }
    try{
    connection.query("SELECT *   from appointment where aid=? ",[aid],(err,result)=>{
        if(err)
        {
            console.log(err);
            return res.status(500).json({message:'error retriving data,try some other time with perfect data'});
        }
        else
        {
            if (result.length==0)
            {return res.status(200).json({message:'this slot is not booked cannot be updated',});}
            else
            {
                connection.query(`update appointment set  did=? , pid=? , appointment_time=?, appointment_date=? where aid=?;`,[did,pid,appointment_time,appointment_date,aid],(err,result)=>
                {
                    if(err)
                        {
                            console.log(err);
                            return res.status(500).json({message:'error retriving data,try some other time'});
                        }
                        else
                        {
                            return res.status(200).json({message:'appointment updated successfully'});
                        }
                })
            }
        }
    })}
    catch(err)
    {
        console.log(err);

    return res.status(500).json({message:'Internal server error'});
    }
}


module.exports={populate_appointments,get_appointment,get_slots,book_appointment,delete_appointment,update_appointment};